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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* All pages using layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/career-paths" element={<CareerPaths />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Auth pages without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;