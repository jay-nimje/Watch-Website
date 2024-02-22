import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Compo/Header";
import Foooter from "./Compo/Foooter";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Sign_up from "./Pages/Sign_up";
import Sign_in from "./Pages/Sign_in";
import Profile from "./Pages/Profile";
// toastify notification 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mens from "./Pages/Mens";
import Womans from "./Pages/Womans";
import Kids from "./Pages/Kids";


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<> <Header/> <Index/> <Foooter/></>}></Route>
          <Route path="/mens" element={<> <Header/> <Mens/> <Foooter/></>}></Route>
          <Route path="/womans" element={<> <Header/> <Womans/> <Foooter/></>}></Route>
          <Route path="/kids" element={<> <Header/> <Kids/> <Foooter/></>}></Route>
          <Route path="/about" element={<> <Header/> <About/> <Foooter/></>}></Route>
          <Route path="/blog" element={<> <Header/> <Blog/> <Foooter/></>}></Route>
          <Route path="/contact" element={<> <Header/> <Contact/> <Foooter/></>}></Route>
          <Route path="/sign_up" element={<> <Header/> <Sign_up/> <Foooter/></>}></Route>
          <Route path="/sign_in" element={<> <Header/> <Sign_in/> <Foooter/></>}></Route>
          <Route path="/profile" element={<> <Header/> <Profile/> <Foooter/> </>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
