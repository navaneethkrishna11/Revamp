import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Responsive design handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cars = [
    {
      id: 1,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FAventador-Lamborghini-Car-HD-Wallpaper.jpg&f=1&nofb=1&ipt=67324a63913c1ea6ef3202c1b1cec8cd8984634fda58dec9c3ad2b4c9f504140&ipo=images",
      title: "Classic Mustang",
      subtitle: "1969 Ford Mustang GT"
    },
    {
      id: 2,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdcarwallpapers.com%2Fwalls%2Fferrari_gtc4lusso_t_2017_4k-HD.jpg&f=1&nofb=1&ipt=f7e99b55bed34adfdec56c2fe7e61756666d6fbeac05f90c92091a17585e0581&ipo=images",
      title: "Vintage Porsche",
      subtitle: "1963 Porsche 911"
    },
    {
      id: 3,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FXXh7btl.jpg&f=1&nofb=1&ipt=cfbf740ed4ece7ec19391510ebdf2da2fd16a272081493d2f9769c4f1aa4f1bc&ipo=images",
      title: "Ferrari F40",
      subtitle: "1987 Supercar Legend"
    },
    {
      id: 4,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7296347.jpg&f=1&nofb=1&ipt=fd9f4d80e7c4c47caa91dcc6922c703ec725d25542ca9e08c674681702f4b3ef&ipo=images",
      title: "Mercedes 300SL",
      subtitle: "1954 Gullwing"
    },
    {
      id: 5,
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fa%2F2%2F4%2F990303-large-sports-cars-wallpapers-hd-1920x1200-laptop.jpg&f=1&nofb=1&ipt=8e1a6cd6d0f2af29cf479e137a8c89739c905fc5bb37810af0c8248745fa7251&ipo=images",
      title: "Jaguar E-Type",
      subtitle: "1961 Series 1"
    },
    {
      id: 6,
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F8j9hbVa.jpg&f=1&nofb=1&ipt=3bda930d41705f0fd19d9f6ed80318347ca2f371b6a623c8ec1b25c53a3628e5&ipo=images",
      title: "Aston Martin DB5",
      subtitle: "1963 Grand Tourer"
    }
  ];

  const ads = [
    "🔥 Special discount on vintage cars this week!",
    "💫 Join our exclusive car collectors club",
    "🌟 New arrivals coming soon",
    "🏆 Visit our showroom for premium selections"
  ];

  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 3000);

    return () => clearInterval(adInterval);
  }, []);

  const nextSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    setCurrentIndex((prev) => 
      (prev + itemsPerSlide) % Math.ceil(cars.length / itemsPerSlide) * itemsPerSlide
    );
  };

  const prevSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerSlide;
      return newIndex < 0 
        ? Math.ceil(cars.length / itemsPerSlide) * itemsPerSlide - itemsPerSlide 
        : newIndex;
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white-300 rounded-lg">
      {/* Marquee for ads */}
      <div className="w-full bg-zinc-800 p-2 mb-4 sm:mb-6 overflow-hidden">
        <div className="whitespace-nowrap text-white text-sm sm:text-base">
          {ads[currentAd]}
        </div>
      </div>

      {/* Main heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-2 text-center">
        Luxury Car Collection
      </h1>
      <h2 className="text-sm sm:text-base text-black mb-4 sm:mb-6 text-center">
        Discover Our Premium Vintage Selection
      </h2>

      {/* Carousel container */}
      <div className="relative">
        <div className="flex gap-2 sm:gap-4">
          {cars
            .slice(
              currentIndex, 
              currentIndex + (isMobile ? 1 : 3)
            )
            .map((car) => (
              <div 
                key={car.id} 
                className={`${isMobile ? 'w-full' : 'w-1/3'}`}
              >
                <div className="bg-zinc-800 rounded-lg overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-36 sm:h-48 object-cover"
                  />
                  <div className="p-2 sm:p-4">
                    <h3 className="text-sm sm:text-lg font-semibold text-white">
                      {car.title}
                    </h3>
                    <p className="text-xs sm:text-base text-zinc-400">
                      {car.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 
            -translate-x-2 sm:-translate-x-6 
            bg-orange-500 p-1 sm:p-2 
            rounded-full text-white"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 
            translate-x-2 sm:translate-x-6 
            bg-orange-500 p-1 sm:p-2 
            rounded-full text-white"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default CarCarousel;