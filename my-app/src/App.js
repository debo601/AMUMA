import React from 'react'
import Contact from './pages/contact'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Index from './pages/Index'
import Home from './pages/Home'
import review from './pages/review'
import Consultation from './pages/consultation/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/Home' element={<Home />} />
        <Route path='./consultation/steps' element={<Consultation />} />
        <Route path='./review' element={<review />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

// import MainRoute from '../src/routes/MainRoute';
// // import "../src/assets/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <MainRoute />
//       </BrowserRouter>
//     </>

//   );
// }

// export default App;