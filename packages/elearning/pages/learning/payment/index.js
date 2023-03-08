import React, { useEffect, useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import PaymentField from '../../../components/PaymentField/PaymentField';
import Footer from '@/components/_App/Footer';

const Index = ({ user }) => {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle='Payment Information'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Monthly Plan - Payment Information'
            />

            <PaymentField />

            <Footer />
        </>
    );
};

export default Index;
