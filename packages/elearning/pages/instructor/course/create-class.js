import React from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import Link from 'next/link';
import CourseCreateForm from '@/components/Instructor/CourseCreateForm';
import SupportButton from '@/components/ContactUs/SupportBtn';

const Create = ({ user }) => {
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <div className='ptb-100'>
                <div className='container'>
                    <h2 className='fw-bold mb-4'>Create Class Room</h2>

                    <ul className='nav-style1'>
                        <li>
                            <Link href='/instructor/courses/'>
                                <a>Courses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/instructor/course/create/'>
                                <a>Create a Course</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/instructor/course/create-class/'>
                                <a className='active'>Create Class Room</a>
                            </Link>
                        </li>
                    </ul>

                    <div className='create-course-form'>
                        <CourseCreateForm
                            btnText='Create Class Room'
                            is_class={true}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Create;
