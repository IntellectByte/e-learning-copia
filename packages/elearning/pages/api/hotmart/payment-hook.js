import {Enrolment} from "@/database/models";
import User from "@/database/models/user";
import Course from "@/database/models/course";
import {checkoutConfirmation} from "../../../email-templates/checkout-confirmation";
import {redirect} from 'next/router';
import {router} from "next/client";
import {v4 as uuidv4} from "uuid";
import passwordGenerator from "password-generator";
import {passwordResetConfirmation} from "../../../email-templates/password-reset-confirmation";
import bcrypt from "bcrypt";


export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await hookHandler(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
}

const hookHandler = async (req, res) => {

    try {

        const {
            data, id, creation_date, event
        } = req.body


        if (event !== 'PURCHASE_APPROVED') {
            throw new Error("The purchase could not be completed.")
        }

        console.log(event)
        console.log("product", data.product)
        console.log("purchase", data.purchase)
        console.log("sub", data.subscription)
        console.log("buyer", data.buyer)
        console.log(id)
        console.log(creation_date)

        let user = await User.findOne({
            where: {email: data.buyer.email}
        })

        if (!user) {
            const confirmToken = uuidv4();

            const password = passwordGenerator(12, false)

            await passwordResetConfirmation(password, data.buyer.email, data.buyer.email)

            const passwordHash = await bcrypt.hash(password, 10);

            user = await User.create({
                email: data.buyer.email,
                password: passwordHash,
                reset_password_token: confirmToken,
                reset_password_send_at: Date.now(),
                email_confirmed: 1,
                email_confirmed_at: Date.now()
            });
        }

        const course = await Course.findOne({
            where: {hotmartId: data.purchase.offer.code}
        })

        // console.log("-------------------------------------------------------------")
        // console.log(user)
        // console.log(course)


        await Enrolment.create({
            bought_price: data.purchase.price.value,
            payment_method: "Hotmart Checkout",
            buyer_name: `${user.first_name} ${user.last_name}`,
            buyer_email: user.email,
            buyer_avatar: user.profile_photo,
            userId: user.id,
            courseId: course.id,
            status: "paid",
        });

        await checkoutConfirmation([course], user.first_name, user.email);

        // redirect(res, "/learning/my-courses/", 301)
        await router.push('/learning/my-courses/')

        // return res.status(200).json({
        //     message: "ok"
        // })

        res.writeHead(302, {Location: '/learning/my-courses/'})
        res.end()


        // Respond with a success status

    } catch (err) {
        // Respond with a 405 error for non-POST requests

        console.log(err.message)

        res.status(405).json({
            message: err.message
        })
    }
};


