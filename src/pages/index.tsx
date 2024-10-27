import HeroBanner from '@/components/HeroBanner';
import RaceWeekendSchedule from '@/components/RaceWeekendSchedule';
import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>2023 Monaco Grand Prix</title>
      </Head>
      <HeroBanner />
      <RaceWeekendSchedule />
    </>
  );
}
