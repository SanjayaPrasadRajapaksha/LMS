import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollmants from './pages/student/MyEnrollmants'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCources from './pages/educator/MyCources'
import StudentsEnrolleded from './pages/educator/StudentsEnrolleded'
import Navbar from './components/student/Navbar'

const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='course-list' element={<CoursesList />} />
        <Route path='course-list/:input' element={<CoursesList />} />
        <Route path='course/:id' element={<CourseDetails />} />
        <Route path='my-enrollements' element={<MyEnrollmants />} />
        <Route path='player/:courseId' element={<Player />} />
        <Route path='loading/:path' element={<Loading />} />

        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCources />} />
          <Route path='student-enrolled' element={<StudentsEnrolleded />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
