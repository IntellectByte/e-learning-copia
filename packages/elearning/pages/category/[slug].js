import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import CoursesList from '@/components/Category/CoursesList';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';

export default function CoursesPage({ user }) {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <PageBanner
                pageTitle='Category'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Category'
            />

            <CoursesList user={user} />

            <Footer />
        </>
    );
}
