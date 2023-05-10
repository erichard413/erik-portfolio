import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Education from './components/Education'
import './App.css'

function App() {


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
    <>
    <Header />
    <div className="main-content">
      <section className="container reveal active">
        <About />
      </section>
      <section className="container reveal"> 
        <Work />
      </section>  
      <section className="container reveal">
        <Experience />
      </section>  
      <section className="container reveal">
        <Education />
      </section>  
      <section className="container reveal">
        <Contact />
      </section>  
    </div>
    <Footer />
    </>
  )
}

export default App
