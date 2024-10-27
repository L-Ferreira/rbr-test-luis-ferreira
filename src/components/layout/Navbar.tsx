// components/layout/Navbar.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const Navbar = () => {
     const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? 'backdrop-blur-lg' : ''
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/redbullracing-logo.png"
            alt="Logo"
            width={160}
            height={80}
            priority
          />
        </Link>
        
        <div className="flex gap-4">
          <Button className='hover:underline text-white font-bold text-base decoration-redbull-red decoration-2 underline-offset-8' variant="link" asChild>
            <Link href="/standings">Standings</Link>
          </Button>
          <Button className='hover:underline text-white font-bold text-base decoration-redbull-red decoration-2 underline-offset-8' variant="link" asChild>
            <Link href="/contact">Oracle In Practice</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar