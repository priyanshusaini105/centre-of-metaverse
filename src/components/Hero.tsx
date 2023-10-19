"use client";
import Image from 'next/image'

export const Hero = () => {
  return <section className="hero-bg bg-primary-400 flex items-center flex-col">
    <span className="uppercase text-6xl my-6 text-gray-50">Experience the</span>
    <br/>
    <span className="uppercase text-8xl text-secondary">Metaverse</span>
  <Image
  src="/img/headset.png"
  width={1000}
  height={300}
  alt="Metaverse Headset"
  className="w-[64rem] h-[35.27rem]"
  />

  </section>;
};
