import React from 'react'
import Navbar from './../home/navbar/Navbar';
import CourseList from './course-list/CourseList';
import CourseDetail from './course-detail/CourseDetail';
import Footer from './../home/footer/Footer';

const CoursePage = () => {
  return (
    <>
        <div className="course-page-container">
        <Navbar />
        <h1>Available Courses</h1>
        <CourseList />
        <CourseDetail />
        <Footer />
        </div>
    </>
  )
}

export default CoursePage
