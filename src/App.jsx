import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

// Sections (used on Home route)
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";

// Pages
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Routes>
          {/* Homepage route with all sections */}
          <Route
            path="/"
            element={
              <Home>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Testimonials />
                <Contact />
              </Home>
            }
          />

          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
