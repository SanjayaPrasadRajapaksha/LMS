import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCources from './pages/educator/MyCources';
import StudentsEnrolleded from './pages/educator/StudentsEnrolleded';
import Navbar from './components/student/Navbar';
import MyEnrollments from './pages/student/MyEnrollments';
import "quill/dist/quill.snow.css";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const isEducatorRoutes = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isEducatorRoutes && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='course-list' element={<CoursesList />} />
        <Route path='course-list/:input' element={<CoursesList />} />
        <Route path='course/:id' element={<CourseDetails />} />
        <Route path='my-enrollments' element={<MyEnrollments />} />
        <Route path='player/:courseId' element={<Player />} />
        <Route path='loading/:path' element={<Loading />} />

        {/* ✅ Educator nested routes */}
        <Route path='/educator' element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCources />} />
          <Route path='student-enrolled' element={<StudentsEnrolleded />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;



