"use client"
import { useState } from 'react';
import Link from 'next/link';

function NavigatePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
         <h1 className='text-white text-xl font-bold'>POSTAPP</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">Post</Link>
          <Link href="/about" className="text-white">Acerca de</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
       <div className="md:hidden bg-blue-500 text-center">  
          <Link  href="/" className="block py-2 px-4 text-white">Post</Link>
          <Link  href="/about" className="block py-2 px-4 text-white">Acerca de</Link>
        </div>
      )}
    </nav>
  );
}

export default NavigatePage;
