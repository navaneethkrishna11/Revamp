import React, { useState, useEffect } from 'react';

const HomeAbout = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-id]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: 2003,
      title: "Company Foundation",
      description: "Started as a small vintage car dealership with just 5 classic cars in inventory."
    },
    {
      year: 2005,
      title: "First Expansion",
      description: "Opened our first restoration workshop and expanded to 50+ premium vehicles."
    },
    {
      year: 2011,
      title: "International Growth",
      description: "Established presence in European markets and launched auction services."
    },
    {
      year: 2017,
      title: "Digital Revolution",
      description: "Introduced virtual showroom and modern restoration techniques."
    },
    {
      year: 2024,
      title: "Global Leadership",
      description: "Became the world's premier classic car curator with 500+ rare vehicles."
    }
  ];

  const carHistory = [
    {
      year: 1886,
      name: "Benz Patent-Motorwagen",
      description: "The first true automobile, powered by an internal combustion engine.",
      image: "https://rmsothebys-cache.azureedge.net/9/e/9/9/0/5/9e9905df8f77f09b2b2b0f21575b9f71ae109f89.jpg"
    },
    {
      year: 1908,
      name: "Ford Model T",
      description: "The first affordable automobile, bringing cars to the masses.",
      image: "https://th.bing.com/th/id/OIP.djDNiTkVXShJi4KOoBF5sgHaFi?rs=1&pid=ImgDetMain"
    },
    {
      year: 1938,
      name: "Volkswagen Beetle",
      description: "Revolutionary people's car that became a global cultural icon.",
      image: "https://th.bing.com/th/id/R.d52cdda9ca6ef7a8fd2108de61c115e0?rik=cCnYDNhtHx8H%2bA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fc%2fcf%2fVolkswagen_Beetle_.jpg&ehk=1i0nJsKEvfHt1Wuh%2bkXLTM7PZapvvW2Eus05rjZ2Ta8%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      year: 1964,
      name: "Porsche 911",
      description: "Defining sports car that set new standards for performance.",
      image: "https://stat.overdrive.in/wp-content/odgallery/2020/05/56966_Porsche-911-Turbo-S_001.jpg"
    }
  ];


  
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-gray-50">
      {/* Company Timeline Section */}
      <div className="mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Our Journey Through Time</h2>
        
        {/* Timeline */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              data-id={`timeline-${index}`}
              className={`
                flex flex-col md:flex-row items-center md:items-start
                mb-8 md:mb-12 relative
                ${visibleItems.has(`timeline-${index}`) ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-500
              `}
            >
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-orange-600 -z-10" />
              
              {/* Content */}
              <div className={`
                w-full m-4 md:w-1/2 px-4 md:px-8
                ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}
              `}>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold text-orange-500">{item.year}</h3>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-700 mt-2">{item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Car History Section */}
      <div className="mt-8 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">Evolution of Automobiles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {carHistory.map((car, index) => (
            <div
              key={car.year}
              data-id={`car-${index}`}
              className={`
                bg-white rounded-lg shadow-lg overflow-hidden
                transform transition-all duration-500
                ${visibleItems.has(`car-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="text-sm md:text-base text-orange-500 font-semibold mb-2">{car.year}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                <p className="text-sm md:text-base text-gray-600">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;