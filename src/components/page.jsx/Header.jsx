import React, { useState } from 'react';

const Header = () => {
  const [images] = useState([
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FPictures-Download-HD-Car-Wallpapers.jpg&f=1&nofb=1&ipt=b9c2472c6b9bcee43b6919101283cd4fc3012093efe02ec86c4442f5a5afe96f&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2133988.jpg&f=1&nofb=1&ipt=edb419e0aecf6e22c3c7225e2e1178b233d1a89ec67ed2f0dc550dbd508bde56&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F592252%2Fpexels-photo-592252.jpeg%3Fcs%3Dsrgb%26dl%3Dcar-592252.jpg%26fm%3Djpg&f=1&nofb=1&ipt=8d2c950e54f9c5b51c0c586cf571d951daa44156ec87c6df82286f1445a92dea&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fw8nIVBl.jpg&f=1&nofb=1&ipt=f6457d93277689bca432db7d23b5918c8a425988b2e594a1b491e0cdb218cb58&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F244206%2Fpexels-photo-244206.jpeg%3Fcs%3Dsrgb%26dl%3Dlights-car-vehicle-244206.jpg%26fm%3Djpg&f=1&nofb=1&ipt=b530b588f3a7360f0d8d8d106f3ba418b2a3a7387de123c29d1541e29f29f1b8&ipo=images'
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile-First Photo Gallery */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] w-full overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                className={`
                  absolute transition-all duration-300 
                  hover:scale-105 hover:z-10 
                  ${index === 0 ? 'z-10' : 'z-0'}
                `}
                style={{
                  top: `${index * 15}px`,
                  left: `${index * 15}px`,
                  transform: `rotate(${index * 2}deg)`,
                  width: '90%',
                  maxWidth: '480px'
                }}
              >
                <img
                  src={img}
                  alt={`Car ${index + 1}`}
                  className="
                    w-full h-auto 
                    object-cover 
                    rounded-lg 
                    shadow-2xl 
                    transition-transform 
                    hover:scale-105
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
  
          {/* Description Section */}
          <div className="space-y-6 mt-8 lg:mt-0 text-center lg:text-left">
            <h1 className="
              text-2xl sm:text-3xl md:text-4xl 
              font-bold text-gray-900 
              tracking-tight
            ">
              Revolutionizing Your Driving Experience
            </h1>
  
            <div className="space-y-4 text-gray-600">
              <p className="
                text-sm sm:text-base md:text-lg 
                leading-relaxed
              ">
                At Revamp, we're not just about cars – we're about transforming your entire automotive experience. Our mission is to deliver exceptional vehicles that combine luxury, performance, and sustainability.
              </p>
  
              <ul className="
                space-y-3 
                text-xs sm:text-sm md:text-base 
                text-left
              ">
                {[
                  'Premium Quality Vehicles',
                  'Exceptional Customer Service',
                  'Innovative Technology Integration'
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
  
              <button className="
                w-full sm:w-auto 
                mt-6 md:mt-8 
                px-4 sm:px-6 
                py-2 sm:py-3 
                bg-orange-600 
                text-white 
                rounded-lg 
                hover:bg-orange-700 
                transition-colors 
                duration-300 
                text-xs sm:text-base
              ">
                <a href="/collections">Explore Our Collection</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  



export default Header;

{/*
  
  import React, { useState, useEffect } from 'react';

const Header = () => {
  const initialImages = [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F244206%2Fpexels-photo-244206.jpeg%3Fcs%3Dsrgb%26dl%3Dlights-car-vehicle-244206.jpg%26fm%3Djpg&f=1&nofb=1&ipt=b530b588f3a7360f0d8d8d106f3ba418b2a3a7387de123c29d1541e29f29f1b8&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F241316%2Fpexels-photo-241316.jpeg%3Fcs%3Dsrgb%26dl%3Dalloy-asphalt-auto-241316.jpg%26fm%3Djpg&f=1&nofb=1&ipt=769e4f7a035e9d18a485c90b30bcdbadd2641cfb6c3b89a35151610bfb125c64&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F63764%2Fpexels-photo-63764.jpeg%3Fcs%3Dsrgb%26dl%3Dcar-cars-lamborghini-aventador-63764.jpg%26fm%3Djpg&f=1&nofb=1&ipt=3bbc7789dc5ef931a0864915da63dc121a8e87920f371efca1d9af54861554e2&ipo=images',
  ];

  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate images by moving the first element to the end
      setImages(prevImages => {
        const [firstImage, ...rest] = prevImages;
        return [...rest, firstImage];
      });
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
       
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            {images.map((img, index) => (
              <div
                key={img + index}
                className={`absolute transition-all duration-500 ease-in-out ${
                  index === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90'
                }`}
              >
                <img
                  src={img}
                  alt={`Car ${index + 1}`}
                  className="w-64 sm:w-72 md:w-80 h-48 sm:h-52 md:h-60 object-cover rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

       
          <div className="space-y-6 mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Revolutionizing Your Driving Experience
            </h1>

            <div className="space-y-4 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                At Revamp, we're not just about cars – we're about transforming your entire automotive experience. Our mission is to deliver exceptional vehicles that combine luxury, performance, and sustainability.
              </p>

              <ul className="space-y-3 text-sm sm:text-base">
                {[
                  'Premium Quality Vehicles',
                  'Exceptional Customer Service',
                  'Innovative Technology Integration',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full sm:w-auto mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 text-sm sm:text-base">
                Explore Our Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
  */}