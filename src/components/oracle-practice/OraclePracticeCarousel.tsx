import React from 'react';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import OraclePracticeCard from './OraclePracticeCard';
import { Play, ChartPie } from 'lucide-react';
import { CardDataProps } from './types';

const CARDS: CardDataProps[] = [
  {
    title: 'Oracle Virtual Lap in Monza',
    type: 'Virtual Lap',
    duration: '6 min read',
    image: '/OracleInPractice/virtual-lap.png',
    gradient: '',
    icon: Play,
    externalLink: 'https://www.redbullracing.com/int-en/videos/oracle-virtual-laps-2023-monza',
  },
  {
    title: 'Oracle Strategy Guide',
    type: 'Oracle Strategy Guide',
    duration: '4 min',
    image: '/OracleInPractice/strategy-guide.png',
    gradient: 'bg-gradient-to-tl from-blue-900/80 to-transparent',
    icon: Play,
    externalLink:
      'https://www.redbullracing.com/int-en/videos/mexico-city-grand-prix-2024-oracle-strategy-guide/',
  },
  {
    title: 'Oracle Cloud Telemetry Data Checo',
    type: 'Data',
    duration: '3 min read',
    image: '/OracleInPractice/telemetry-data.png',
    gradient: 'bg-gradient-to-tl from-blue-900/80 to-transparent',
    icon: ChartPie,
    externalLink: 'https://www.oracle.com/',
  },
];

const OraclePracticeCarousel = () => {
  return (
    <div className="w-screen overflow-hidden" data-testid="oracle-practice-carousel">
      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="ml-0 md:-ml-5">
          {CARDS.map((cardData, index) => (
            <CarouselItem
              key={index}
              className="pl-5 basis-auto"
              data-testid="oracle-practice-carousel-item"
            >
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
