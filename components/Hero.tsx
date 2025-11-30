import { ArrowRight, Leaf } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { getHeroSection } from "@/sanity/helpers";

const Hero = async () => {
    const data = await getHeroSection();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden bg-brand-cream dark:bg-neutral-950 transition-colors duration-300">
      {/* Background Shape for Desktop */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-gold/5 rounded-l-[100px] -z-0 hidden lg:block"></div>
      {/* Background Shape for Mobile */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-brand-gold/5 rounded-t-[50px] -z-0 block lg:hidden"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in max-w-xl text-center md:text-left order-2 md:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-green dark:text-brand-gold font-semibold text-sm tracking-wider mb-4 md:mb-6 border border-brand-gold/30">
              {data.tagLine}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-brand-green dark:text-white mb-4 md:mb-6 leading-tight">
              {data.title} <br/>
              <span className="text-brand-gold italic">{data.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button  className="bg-brand-green text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-greenLight transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                {data.buttonText1} <ArrowRight size={20} />
              </button>
              {/* <button onClick={() => {
                const el = document.getElementById('process');
                if(el) el.scrollIntoView({ behavior: 'smooth'});
              }} className="bg-white dark:bg-neutral-800 text-brand-green dark:text-brand-gold border border-brand-green/20 dark:border-neutral-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-green/5 dark:hover:bg-neutral-700 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                Learn the Process
              </button> */}
            </div>
          </div>

          {/* Right Graphics - Real Images Composition */}
          <div className="relative w-full flex items-center justify-center order-1 md:order-2 mt-8 md:mt-0">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-brand-gold/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
               {/* Main Large Image - Canola Field */}
               <div className="relative w-[280px] h-[360px] md:w-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 transform rotate-2 z-10">
                 <img 
                   src={urlFor(data.heroImageLarge).url()}
                   alt="Vibrant Canola Field" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                 />
               </div>

               {/* Floating Secondary Image - Product/Nature Detail */}
               <div className="absolute bottom-6 -left-4 md:bottom-10 md:-left-12 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-neutral-800 transform -rotate-3 z-20">
                  <img 
                    src={urlFor(data.heroImageSmall).url()}
                    alt="Canola Flowers Close Up" 
                    className="w-full h-full object-cover"
                  />
               </div>

               {/* Decorative Badge */}
               <div className="absolute top-4 -right-4 md:top-8 md:-right-8 bg-white dark:bg-neutral-800 p-3 md:p-4 rounded-xl shadow-lg z-30 animate-bounce" style={{animationDuration: '3s'}}>
                 <div className="flex items-center gap-2">
                   <div className="bg-green-100 dark:bg-green-900/30 p-1.5 md:p-2 rounded-full text-brand-green dark:text-brand-gold">
                     <Leaf size={16} className="md:w-5 md:h-5" />
                   </div>
                   <div>
                     <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-bold">100% Organic</p>
                     <p className="font-serif text-sm md:text-base font-bold text-brand-dark dark:text-white">Farm Fresh</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero