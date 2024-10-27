import OraclePracticeCarousel from '@/components/oracle-practice/OraclePracticeCarousel';
import Head from 'next/head';

export default function OracleInPractice() {
  return (
    <>
      <Head>
        <title>Oracle In Practice</title>
      </Head>
      <div className="w-full h-screen overflow-hidden relative grid masked-content">
        <div className="flex mt-24 md:mt-[120px] md:px-8 md:mx-2 flex-col z-10 gap-64 md:gap-80">
          <h1 className="max-w-96 px-6 md:px-0 md:w-full md:max-w-none font-bold text-white text-[2.75rem] md:text-5xl lg:text-6xl leading-none relative ">
            Oracle In Practice
          </h1>
          <OraclePracticeCarousel />
        </div>

        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/OracleInPractice/background.png)`,
            backgroundPosition: 'left 40% bottom',
            backgroundSize: 'cover',
          }}
        />
      </div>
    </>
  );
}
