import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CardDataProps {
  title: string;
  type: string;
  duration: string;
  image: string;
  gradient: string;
}

const OraclePracticeCard = ({ title, type, duration, image, gradient }: CardDataProps) => {
  return (
    <Card
      className={`border-none text-white h-[412px] w-[310px] ${gradient} rounded-2xl`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'left 40% bottom',
        backgroundSize: 'cover',
      }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-around">
          <div>{type}</div>
          <div>{duration}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OraclePracticeCard;
