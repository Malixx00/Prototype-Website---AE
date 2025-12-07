import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Legal } from './components/Legal';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header onNavigate={setCurrentView} />

      <main className="flex-grow">
        {currentView === PageView.HOME ? (
          <>
            <Hero />
            <Services />
            <WhyUs />
            <Process />
            <Contact />
          </>
        ) : (
          <Legal view={currentView} />
        )}
      </main>

      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;