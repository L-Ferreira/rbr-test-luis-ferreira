import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { FLAGS } from '@/lib/country-flags';

const HeroBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative grid masked-content">
      <div
        className="flex flex-col max-w-5xl "
        style={{ marginLeft: '120px', marginTop: '220px', gap: '230px' }}
      >
        <motion.h1
          className="font-bold text-white text-[9rem] leading-none relative z-10"
          style={{
            y: textY,
          }}
        >
          Monaco Grand Prix
        </motion.h1>

        <div className="flex flex-col z-30 gap-5">
          <div className="flex items-center text-2xl font-bold rounded shadow-md gap-4">
            <Calendar className="h-6 w-6" /> <span>24 – 27 NOV 2023</span>
          </div>
          <div className="flex items-center text-2xl font-bold rounded shadow-md gap-4">
            <Image
              src={FLAGS['MC']}
              width="35"
              height="25"
              alt={'monaco'}
              className="object-contain"
            />
            <span>Monaco</span>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/Hero/background.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 "
        style={{
          backgroundImage: `url(/Hero/foreground.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          y: foregroundY,
        }}
      />
    </div>
  );
};

export default HeroBanner;