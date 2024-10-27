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
  <div className="flex flex-col gap-2 justify-start mb-16">
    <p className="text-5xl font-bold">{title}</p>
    <div className="flex pl-1 gap-2 items-center text-redbull-grey">
      <Clock className="h-4 w-4" />
      <p className="font-bold">{time}</p>
    </div>
  </div>
);

const DayHeader = ({ day, date }: DayHeaderProps) => (
  <div className="text-redbull-grey">
    <div className="flex items-start gap-1">
      <p className="text-base font-bold">{date}th</p>
      <p className="text-xs font-bold">MAY</p>
    </div>
    <div className="text-2xl font-bold">
      <p>{day}</p>
    </div>
  </div>
);

const RaceWeekendSchedule = () => {
  return (
    <div className="container flex gap-16 py-40 justify-between">
      <div className="flex gap-7">
        <DayHeader day="Friday" date="26" />
        <div>
          <SessionItem title="Practice 1" time="13:30 - 14:30" />
          <SessionItem title="Practice 2" time="17:00 - 18:00" />
        </div>
      </div>

      <div className="flex gap-7">
        <DayHeader day="Saturday" date="27" />
        <div>
          <SessionItem title="Practice 3" time="12:30 - 13:30" />
          <SessionItem title="Qualifying" time="16:00 - 17:00" />
        </div>
      </div>

      <div className="flex gap-7">
        <DayHeader day="Sunday" date="28" />
        <div>
          <SessionItem title="Grand Prix" time="15:00 - 17:00" />
        </div>
      </div>
    </div>
  );
};

export default RaceWeekendSchedule;
