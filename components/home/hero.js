import Image from 'next/image'
 
export default function WeddingHero() {
    return (
      <section className="bg-brown">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-lrose">
              Elevate Your Wedding Experience with <span className="text-primary-700">Wedding Planner</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-lrose lg:mb-8 md:text-lg lg:text-xl ">
              Transform your special day into a magical celebration with personalized wedding planning services from Dream Events. From concept to execution, we make dreams come true.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get Started
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Contact Us
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
                src="/assets/hero.jpeg"
                width={600}
                height={700}
                alt="Picture of the author"
                />
          </div>
        </div>
      </section>
    );
  }
  