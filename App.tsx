import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutArt } from './components/AboutArt';
import { History } from './components/History';
import { Interviews } from './components/Interviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutArt />
      <History />
      <Interviews />
      <Location />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default App;
