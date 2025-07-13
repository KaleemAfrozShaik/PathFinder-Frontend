import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CareerPaths from './pages/CareerPaths';
import Mentorship from './pages/Mentorship';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/TermsConditions';
import Layout from './components/Layout';
import CareerPathDetails from './pages/CareerPathDetails';
import Profile from './pages/Profile';
import ChatPlaceholder from './pages/ChatPlaceholder';
import EditProfile from './components/EditProfile';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/career-paths" element={<CareerPaths />} />
          <Route path="/career-paths/:careerId" element={<CareerPathDetails />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/chat/:mentorId" element={<ChatPlaceholder />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;