import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" />
        <Route path="/projects" />
        <Route path="/faq" />
        <Route path="/contact" />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/blog-detail/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
