import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "./components/Education";
import "./App.css";
import { useTheme } from "./hooks/useThemeContext";

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
  reveal();
  return (
    theme && (
      <>
        <Header />
        <div className="main-content">
          <section className="container reveal active">
            <About theme={theme} />
          </section>
          <section className="container reveal">
            <Work theme={theme} />
          </section>
          <section className="container reveal">
            <Experience theme={theme} />
          </section>
          <section className="container reveal">
            <Education theme={theme} />
          </section>
          <section className="container reveal">
            <Contact theme={theme} />
          </section>
        </div>
        <Footer />
      </>
    )
  );
}

export default App;
