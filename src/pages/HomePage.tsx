import React from 'react';
import { Seo } from '@/components/seo/Seo';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/sections/Hero';
import { Statement } from '@/sections/Statement';
import { About } from '@/sections/About';
import { Features } from '@/sections/Features';
import { Categories } from '@/sections/Categories';
import { Audience } from '@/sections/Audience';
import { Channels } from '@/sections/Channels';
import { WhyCordova } from '@/sections/WhyCordova';
import { NewsRoom } from '@/sections/NewsRoom';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export const HomePage: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="w-full min-h-screen bg-black">
        <Seo />
        <Navbar />
        <Hero />
        <Statement />
        <About />
        <Features />
        <Categories />
        <Audience />
        <Channels />
        <WhyCordova />
        <NewsRoom />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
};
