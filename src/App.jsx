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
import RegisterMentor from './pages/RegisterMentor';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/career-paths" element={<ProtectedRoute><CareerPaths /></ProtectedRoute>} />
        <Route path="/career-paths/:careerId" element={<ProtectedRoute><CareerPathDetails /></ProtectedRoute>} />
        <Route path="/mentorship" element={<ProtectedRoute><Mentorship /></ProtectedRoute>} />
        <Route path="/register-mentor" element={<ProtectedRoute><RegisterMentor /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/mentorship/request/:mentorId" element={<ProtectedRoute><ChatPlaceholder /></ProtectedRoute>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        </Route>
    </Routes>
  );
};

export default App;