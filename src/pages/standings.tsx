import StandingsTable from '@/components/standings';
import Head from 'next/head';

export default function Standings() {
  return (
    <>
      <Head>
        <title>2023 Driver Standings</title>
      </Head>
      <StandingsTable season={2023} />
    </>
  );
}
