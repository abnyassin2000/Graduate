import React from 'react';
import '../styles/main.css'; // CSS منفصل للصفحة الرئيسية (من styles)
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits'; // غيرت الاسم إلى Benefits كما في الكود الخاص بك
import ParentSection from '../components/ParentSection'; // غيرت الاسم إلى ParentSection كما في الكود الخاص بك
import CTASection from '../components/CTASection'; // غيرت الاسم إلى CTASection كما في الكود الخاص بك
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Benefits />
      <ParentSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;