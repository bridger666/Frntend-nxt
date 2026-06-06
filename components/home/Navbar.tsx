'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/components/context/LanguageContext';
import SignInModal from '@/components/auth/SignInModal';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-[1000]" style={{ background: 'transparent' }}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center" style={{ padding: '1.5rem 2rem' }}>
        {/* Left: Aivory logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/aivory-logo.svg"
            alt="Aivory Logo"
            width={90}
            height={30}
            className="h-[30px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Right: Auth actions & Language Toggle */}
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                language === 'en' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:opacity-70'
              }`}
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: '10px' }}
            >
              <Image src="/uk-flag.svg" alt="EN" width={14} height={10} className="rounded-[2px] object-cover h-[10px] w-[14px]" />
              EN
            </button>
            <span className="text-white/30 text-[10px]">|</span>
            <button
              onClick={() => setLanguage('id')}
              className={`flex items-center gap-1.5 transition-all duration-300 ${
                language === 'id' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale hover:opacity-70'
              }`}
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: '10px' }}
            >
              <Image src="/id-flag.svg" alt="ID" width={14} height={10} className="rounded-[2px] object-cover h-[10px] w-[14px]" />
              ID
            </button>
          </div>
          <Link
            href="/product"
            className="text-white font-normal uppercase tracking-normal no-underline hover:underline transition-all duration-200"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '10px' }}
          >
            PRODUCT
          </Link>
          <Link
            href="/company"
            className="text-white font-normal uppercase tracking-normal no-underline hover:underline transition-all duration-200"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '10px' }}
          >
            COMPANY
          </Link>
          <button
            onClick={() => setIsSignInModalOpen(true)}
            className="text-white font-normal uppercase tracking-normal no-underline hover:underline transition-all duration-200 bg-transparent border-none cursor-pointer"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: '10px' }}
          >
            SIGN IN
          </button>
          <button
            className="h-[29px] px-[18px] font-normal text-white bg-transparent inline-flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:border-white/40"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: 0,
              fontFamily: "'Manrope', sans-serif",
              fontSize: '10px',
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            DASHBOARD
          </button>
        </div>
      </div>
      {/* Sign In Modal */}
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </nav>
  );
}
