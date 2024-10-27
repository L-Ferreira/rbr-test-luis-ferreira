// components/layout/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`fixed inset-0 w-full h-20 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-redbull-background-opacity backdrop-blur-lg' : ''
      }`}
    >
      <div className="mx-auto px-4 md:px-7 h-20 flex items-center justify-between">
        <Link href="/" className="pl-4 flex items-center">
          <Image src="/redbullracing-logo.png" alt="Logo" width={160} height={80} priority />
        </Link>

        <div className="ml-1 flex md:gap-4">
          <Button
            className="hover:underline text-white font-bold text-base decoration-redbull-red decoration-2 underline-offset-[10px]"
            variant="link"
            asChild
          >
            <Link href="/standings">Standings</Link>
          </Button>
          <Button
            className="hover:underline text-white font-bold text-base decoration-redbull-red decoration-2 underline-offset-[10px]"
            variant="link"
            asChild
          >
            <Link href="/oracle-in-practice">Oracle In Practice</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
