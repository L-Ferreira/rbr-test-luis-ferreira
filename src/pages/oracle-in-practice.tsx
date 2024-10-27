import Head from 'next/head';

export default function OracleInPractice() {
  return (
    <>
      <Head>
        <title>Oracle In Practice</title>
      </Head>
      <div className="w-full h-screen overflow-hidden relative grid masked-content">
        <div className="container flex mt-24 md:mt-[120px] md:mx-2 flex-col">
          <h1 className="font-bold text-white text-[2.75rem] md:text-5xl lg:text-6xl leading-none relative z-10">
            Oracle In Practice
          </h1>
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
