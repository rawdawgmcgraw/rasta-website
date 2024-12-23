import Image from "next/image";

export default function Home() {
  return (
    <div className='h-screen w-full flex justify-center items-center text-white text-3xl'>
      <Image
        className='mix-blend-screen'
        src='/logo1.jpeg'
        alt='logo'
        width={500}
        height={500}
      />
    </div>
  );
}
