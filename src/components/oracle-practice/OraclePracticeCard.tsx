import React from 'react';

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CardDataProps } from './types';

const OraclePracticeCard = ({
  title,
  type,
  duration,
  image,
  gradient,
  icon: Icon,
  externalLink,
}: CardDataProps) => {
  return (
    <Card
      className={`border-none text-white h-[412px] w-[310px] ${gradient} rounded-2xl relative`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'left 40% bottom',
        backgroundSize: 'cover',
      }}
    >
      <a
        className="flex flex-col justify-between h-full"
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardHeader>
          <CardTitle className="flex justify-end">
            {Icon && <Icon fill="#fff" strokeWidth={1} className="w-5 h-5" />}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col gap-4 items-start">
          <p className="font-bold text-xl">{title}</p>
          <div className="flex w-full justify-between text-base items-baseline">
            <div className="bg-redbull-background-opacity backdrop-blur-lg rounded px-2 py-1">
              {type}
            </div>
            <div>{duration}</div>
          </div>
        </CardFooter>
      </a>
    </Card>
  );
};

export default OraclePracticeCard;
