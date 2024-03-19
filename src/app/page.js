import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-24 text-orange-600">
      <div></div>
      <div></div>
      <div className="rounded-mobBigBox lg:rounded-bigBox container bg-primary-400">
        <div className='flex flex-wrap lg:flex-row w-full py-8 md:py-16'>
          <div className='w-full lg:w-2/3 pr-2 lg:pr-20'>
            <div className='brown-title-font mb-1'>Little about Design Habitat</div>
            <div className='text-md lg:text-lg '>Embark on this thrilling and dynamic journey with us, where exploration, growth, and boundless opportunities await to propel your creativity to new heights! The Design Habitat endeavours to lay the groundwork for all aspiring individuals driven to forge a successful career in the Design industry.</div>
          </div>
          <div className='w-full lg:w-1/3 justify-center'>
            <img className="avatar-size mt-8 md:mt-0" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/Introduction-6.png"/>
          </div>
        </div>
      </div>
    </main>
  );
}
