import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import OraclePracticeCard from './OraclePracticeCard';

const CARDS = [
  {
    title: 'Oracle Virtual Lap in Monza',
    type: 'Virtual Lap',
    duration: '6 min read',
    image: '/OracleInPractice/virtual-lap.png',
    gradient: '',
  },
  {
    title: 'Oracle Strategy Guide',
    type: 'Oracle Strategy Guide',
    duration: '4 min',
    image: '/OracleInPractice/strategy-guide.png',
    gradient: 'bg-gradient-to-tl from-blue-900/80 to-transparent',
  },
  {
    title: 'Oracle Cloud Telemetry Data Checo',
    type: 'Data',
    duration: '3 min read',
    image: '/OracleInPractice/telemetry-data.png',
    gradient: 'bg-gradient-to-tl from-blue-900/80 to-transparent',
  },
];

const OraclePracticeCarousel = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="ml-0 md:-ml-5">
          {CARDS.map((cardData, index) => (
            <CarouselItem key={index} className="pl-5 basis-auto">
              <div className="p-1">
                <OraclePracticeCard {...cardData} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OraclePracticeCarousel;
