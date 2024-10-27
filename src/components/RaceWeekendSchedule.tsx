import React from 'react';
import { Clock } from 'lucide-react';

interface SessionItemProps {
  title: string;
  time: string;
}

interface DayHeaderProps {
  day: string;
  date: string;
}

const SessionItem = ({ title, time }: SessionItemProps) => (
  <div className="flex flex-col gap-2 justify-start mb-8 md:mb-16">
    <p className="text-3xl md:text-5xl font-bold">{title}</p>
    <div className="flex pl-1 gap-2 items-center text-redbull-grey">
      <Clock className="h-4 w-4" />
      <p className="font-bold text-sm md:text-base">{time}</p>
    </div>
  </div>
);

const DayHeader = ({ day, date }: DayHeaderProps) => (
  <div className="text-redbull-grey min-w-[100px]">
    <div className="flex items-start gap-1">
      <p className="text-sm md:text-base font-bold">{date}th</p>
      <p className="text-xs font-bold">MAY</p>
    </div>
    <div className="text-xl md:text-2xl font-bold">
      <p>{day}</p>
    </div>
  </div>
);

const RaceWeekendSchedule = () => {
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  py-20 md:py-40">
        <div className="flex gap-4 justify-around md:justify-normal md:gap-7">
          <DayHeader day="Friday" date="26" />
          <div className='min-w-[200px]'>
            <SessionItem title="Practice 1" time="13:30 - 14:30" />
            <SessionItem title="Practice 2" time="17:00 - 18:00" />
          </div>
        </div>

        <div className="flex gap-4 justify-around md:justify-normal md:gap-7">
          <DayHeader day="Saturday" date="27" />
                    <div className='min-w-[200px]'>

            <SessionItem title="Practice 3" time="12:30 - 13:30" />
            <SessionItem title="Qualifying" time="16:00 - 17:00" />
          </div>
        </div>

        <div className="flex gap-4 justify-around md:justify-normal md:gap-7 md:col-span-2 xl:col-span-1">
          <DayHeader day="Sunday" date="28" />
                    <div className='min-w-[200px]'>

            <SessionItem title="Grand Prix" time="15:00 - 17:00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceWeekendSchedule;