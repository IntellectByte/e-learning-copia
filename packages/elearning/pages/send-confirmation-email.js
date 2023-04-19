import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import ConfirmEmail from '@/components/Authentication/ConfirmEmail';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';
import TopBanner from '@/components/TopBanner/TopBanner';
import SubscribeForm from '@/components/Common/SubscribeForm';

export default function ForgotPasswordPage({ user }) {
    return (
        <>
            <SupportButton />

            <TopBanner />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Send Confirmation Email'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Send Confirmation Email'
            />

            <ConfirmEmail />

            <SubscribeForm />

            <Footer />
        </>
    );
}
