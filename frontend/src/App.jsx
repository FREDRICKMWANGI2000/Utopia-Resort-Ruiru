import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from "./components/layout/BackToTop";
import BookNowModal from './components/ui/BookNowModal';

// Sections
import Hero from './components/sections/Hero';
import FeaturedEvent from './components/sections/FeaturedEvent';
import Events from './components/sections/Events';
import Activities from './components/sections/Activities';
import Accommodation from './components/sections/Accommodation';
import Restaurant from './components/sections/Restaurant';
import Offers from './components/sections/Offers';
import VirtualTour from './components/sections/VirtualTour';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  const [bookModalOpen, setBookModalOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onBookNow={() => setBookModalOpen(true)} />

      <main>
        <Hero onBookNow={() => setBookModalOpen(true)} />
        <FeaturedEvent />
        <Events />
        <Activities />
        <Accommodation />
        <Restaurant />
        <Offers />
        <VirtualTour />
        <Testimonials />
        <Contact />
        <BackToTop />
      </main>

      <Footer onBookNow={() => setBookModalOpen(true)} />

      <BookNowModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
      />
    </div>
  );
}
