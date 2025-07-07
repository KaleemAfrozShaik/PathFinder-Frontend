import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CareerPaths from './pages/CareerPaths';
import Mentorship from './pages/Mentorship';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/TermsConditions';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/career-paths" element={<CareerPaths/>} />
        <Route path="/mentorship" element={<Mentorship/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="terms" element={<Terms/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
