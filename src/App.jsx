import Header from './components/Header';
import Footer from './components/Footer';
import Sections from './components/Sections';
import SectionAbout from './components/SectionAbout';
import SectionContact from './components/SectionContact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Sections.Hero />
        <Sections.WhoWeAre />
        <Sections.WhatWeDo />
        <Sections.Products />
        <SectionAbout />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
