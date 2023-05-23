import baseUrl from '@/utils/baseUrl';
import { transport } from './config';

const { MANDRILL_USER, MANDRILL_EMAIL_SENDER } = process.env;
export const confirmEmailAddress = async (user) => {
    // console.log(user.email)
    const data = {
        to: user.email,
        from: `${MANDRILL_USER} <${MANDRILL_EMAIL_SENDER}>`,
        subject: 'Confirm Your Email Address',
        html: `
        <!DOCTYPE html>
<html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
>
    <head>
        <meta charset="utf-8" />
        <!-- utf-8 works for most cases -->
        <meta name="viewport" content="width=device-width" />
        <!-- Forcing initial-scale shouldn't be necessary -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name="x-apple-disable-message-reformatting" />
        <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title></title>
        <!-- The title tag shows in email notifications, like Android 4.4. -->

        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

        <style>
        :root {
            --main-color: #EE8AB8;
            --accent-color: #CE417D;
        }
        </style>

        <!-- CSS Reset : BEGIN -->
        <style>
            /* What it does: Remove spaces around the email design added by some email clients. */
            /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
            }

            /* What it does: Stops email clients resizing small text. */
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }

            /* What it does: Centers email on Android 4.4 */
            div[style*='margin: 16px 0'] {
                margin: 0 !important;
            }

            /* What it does: Stops Outlook from adding extra spacing to tables. */
            table,
            td {
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }

            /* What it does: Fixes webkit padding issue. */
            table {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }

            /* What it does: Uses a better rendering method when resizing images in IE. */
            img {
                -ms-interpolation-mode: bicubic;
            }

            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
            a {
                text-decoration: none;
            }

            /* What it does: A work-around for email clients meddling in triggered links. */
            *[x-apple-data-detectors],  /* iOS */
        .unstyle-auto-detected-links *,
        .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }

            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
            .a6S {
                display: none !important;
                opacity: 0.01 !important;
            }

            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
            .im {
                color: inherit !important;
            }

            /* If the above doesn't work, add a .g-img class to any image in question. */
            img.g-img + div {
                display: none !important;
            }

            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
            /* Create one of these media queries for each additional viewport size you'd like to fix */

            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                u ~ div .email-container {
                    min-width: 320px !important;
                }
            }
            /* iPhone 6, 6S, 7, 8, and X */
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                u ~ div .email-container {
                    min-width: 375px !important;
                }
            }
            /* iPhone 6+, 7+, and 8+ */
            @media only screen and (min-device-width: 414px) {
                u ~ div .email-container {
                    min-width: 414px !important;
                }
            }
        </style>

        <!-- CSS Reset : END -->

        <!-- Progressive Enhancements : BEGIN -->
        <style>
            .primary {
                background: #30e3ca;
            }
            .bg_white {
                background: #ffffff;
            }
            .bg_light {
                background: #fafafa;
            }
            .bg_black {
                background: #000000;
            }
            .bg_dark {
                background: rgba(0, 0, 0, 0.8);
            }
            .email-section {
                padding: 2.5em;
            }

            /*BUTTON*/
            .btn {
                padding: 10px 15px;
                display: inline-block;
            }
            .btn.btn-primary {
                border-radius: 5px;
                background: #3056de !important;
                color: #ffffff;
                transition: 0.5s;
            }
            .btn.btn-primary:hover {
                background: #5b77db !important;
                color: #ffffff;
            }
            .btn.btn-white {
                border-radius: 5px;
                background: #ffffff;
                color: #000000;
            }
            .btn.btn-white-outline {
                border-radius: 5px;
                background: transparent;
                border: 1px solid #fff;
                color: #fff;
            }
            .btn.btn-black-outline {
                border-radius: 0px;
                background: transparent;
                border: 2px solid #000;
                color: #000;
                font-weight: 700;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'Lato', sans-serif;
                color: #000000;
                margin-top: 0;
                font-weight: 400;
            }

            body {
                font-family: 'Lato', sans-serif;
                font-weight: 400;
                font-size: 15px;
                line-height: 1.8;
                color: rgba(0, 0, 0, 0.4);
            }

            a {
                color: #30e3ca;
            }
            /*LOGO*/

            .logo h1 {
                margin: 0;
            }
            .logo h1 a {
                color: #30e3ca;
                font-size: 24px;
                font-weight: 700;
                font-family: 'Lato', sans-serif;
            }

            /*HERO*/
            .hero {
                position: relative;
                z-index: 0;
            }

            .hero .text h2 {
                color: #000;
                font-size: 40px;
                margin-bottom: 0;
                font-weight: 400;
                line-height: 1.4;
            }
            .hero .text h3 {
                font-size: 20px;
                font-weight: 300;
                margin-top: 10px;
            }
            .hero .text h2 span {
                font-weight: 600;
                color: #30e3ca;
            }

            /*HEADING SECTION*/
            .heading-section h2 {
                color: #000000;
                font-size: 28px;
                margin-top: 0;
                line-height: 1.4;
                font-weight: 400;
            }
            .heading-section .subheading {
                margin-bottom: 20px !important;
                display: inline-block;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: rgba(0, 0, 0, 0.4);
                position: relative;
            }
            .heading-section .subheading::after {
                position: absolute;
                left: 0;
                right: 0;
                bottom: -10px;
                content: '';
                width: 100%;
                height: 2px;
                background: #30e3ca;
                margin: 0 auto;
            }

            .heading-section-white {
                color: rgba(255, 255, 255, 0.8);
            }
            .heading-section-white h2 {
                line-height: 1;
                padding-bottom: 0;
            }
            .heading-section-white h2 {
                color: #ffffff;
            }
            .heading-section-white .subheading {
                margin-bottom: 0;
                display: inline-block;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: rgba(255, 255, 255, 0.4);
            }

            ul.social {
                padding: 0;
            }
            ul.social li {
                display: inline-block;
                margin-right: 10px;
            }
        </style>

        <style>
        /* Custom styles */
        body {
            font-family: 'Roboto', sans-serif;
        }

        .email-header {
            background-color: var(--main-color);
            padding: 1em;
            text-align: center;
        }

        .email-header img {
            max-width: 200px;
            height: auto;
        }

        .main-content {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 2em;
        }

        .btn.btn-primary {
            background: var(--accent-color) !important;
        }

        .btn.btn-primary:hover {
            background: #27c9b7 !important;
        }

        .heading-section h2 {
            font-size: 32px;
            color: var(--main-color);
        }

        .footer {
            font-size: 14px;
        }

        .footer a {
            color: var(--main-color);
        }
    </style>

    </head>

    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;">
        <center style="width: 100%; background-color: #f1f1f1;">
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                
            <!-- Header -->
            <div class="email-header">
                <img src="https://media.discordapp.net/attachments/1076613189795586122/1083484472491655319/sorvete-logo.png" alt="Logo">
            </div>
                <table
                    align="center"
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                    style="margin: auto"
                >
                    <tr>
                        <td
                            valign="middle"
                            class="hero bg_white"
                            style="padding: 2em 0 4em 0"
                        >
                            <table>
                                <tr>
                                    <td>
                                        <div
                                            class="text"
                                            style="
                                                padding: 0 2.5em;
                                                text-align: left;
                                            "
                                        >
                                            <h4>Querido ${user.first_name},</h4>
                                            <p>
                                                Obrigado por se registrar no
                                                Escola Sorvete! Clique no link
                                                abaixo para verificar seu
                                                endereço de e-mail e ativar sua
                                                conta.
                                            </p>
                                            <center>
  <p>
    <a href="${baseUrl}/confirm-email?token=${user.reset_password_token}&email=${user.email}" style="display: inline-block; font-weight: 400; text-align: center; text-decoration: none; font-size: 16px; line-height: 20px; padding: 12px 30px; background-color: #CE417D; border-radius: 4px; color: #ffffff;">
      Confirmar meu endereço de e-mail
    </a>
  </p>
</center>

                                                Cumprimentos, <br />
                                                Equipe de Apoio Escola Sorvete
                                                <br />
                                                Todos os direitos reservados por
                                                EscolaSorvete.com.br
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table
                    align="center"
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                    style="margin: auto"
                >
                    <tr>
                        <td
                            valign="middle"
                            class="bg_light footer email-section"
                        >
                            <table>
                                <tr>
  <td valign="middle" class="bg_light footer email-section" style="padding: 20px 0;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td style="text-align: center;">
          <h3 style="margin-bottom: 5px;">Escola Sorvete</h3>
          <p style="text-align: center; margin-bottom: 0;">
            <a href="https://www.escolasorvete.com.br/" target="_blank" style="color: #CE417D;">www.escolasorvete.com.br</a>
          </p>
          <p style="text-align: center; margin-top: 5px;">Rua Barra Funda, 209 - Barra Funda, São Paulo</p>
        </td>
      </tr>
    </table>
  </td>
</tr>
<tr>
  <td class="bg_light" style="text-align: center; padding: 10px 0;">
    <p>&copy;2023 Your Escola Sorvete. All Rights Reserved.</p>
  </td>
</tr>
                </table>
            </div>
        </center>
    </body>
</html>

        `,
    };

    try {
        await transport.sendMail(data);
        // console.log("Email send successfully")
        // res.status(200).send("Email send successfully")
    } catch (error) {
        console.log(error);
        // res.status(500).send("Error proccessing charge");
    }
    transport.close();
};
