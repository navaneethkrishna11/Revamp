import React, { useState, useEffect } from 'react';
import { Search, SortAsc, X } from 'lucide-react';
import Footer from '@/components/page.jsx/Footer';
import Navbar1 from '@/components/page.jsx/Navbar1';

const Collections = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [visibleItems, setVisibleItems] = useState(8);

  const facts = [
    "The first car reached a top speed of only 10 mph 🚗",
    "Volkswagen owns 12 different car brands worldwide 🌍",
    "The most expensive car ever sold was a 1955 Mercedes-Benz 300 SLR 💎",
    "The first speeding ticket was issued in 1902 at 45 mph ⚡"
  ];

  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const vehicles = {
    cars: [
      {
        id: 1,
        name: "Tesla Model S Plaid",
        price: 129990,
        image: "https://th.bing.com/th/id/OIP.l76kMbU8a4iqLR_5g6Np4wHaEK?rs=1&pid=ImgDetMain",
        specs: {
          acceleration: "0-60 mph in 1.99s",
          topSpeed: "200 mph",
          range: "396 miles"
        },
        description: "The ultimate electric performance sedan with unmatched acceleration."
      },
      {
        id: 2,
        name: "Ford Mustang Mach-E GT",
        price: 62795,
        image: "https://th.bing.com/th/id/OIP.ipLSB1Is1xj0f2GCmJcXXgAAAA?rs=1&pid=ImgDetMain",
        specs: {
          acceleration: "0-60 mph in 3.5s",
          topSpeed: "124 mph",
          range: "270 miles"
        },
        description: "An electric SUV with the soul of a Mustang."
      },
      {
        id: 3,
        name: "Chevrolet Corvette Z06",
        price: 106695,
        image: "https://cdn.motor1.com/images/mgl/P3onNL/s1/2023-chevrolet-corvette-z06.jpg",
        specs: {
          acceleration: "0-60 mph in 2.6s",
          topSpeed: "195 mph",
          range: "N/A"
        },
        description: "A supercar precision-engineered for ultimate performance."
      },
      {
        id: 4,
        name: "Lamborghini Huracán EVO",
        price: 261274,
        image: "https://th.bing.com/th/id/OIP.22xb0kxxzsQ-BwU0indbPwHaE8?rs=1&pid=ImgDetMain",
        specs: {
          acceleration: "0-60 mph in 2.9s",
          topSpeed: "202 mph",
          range: "N/A"
        },
        description: "Dynamic and innovative, with a naturally aspirated V10 engine."
      },
      {
        id: 5,
        name: "BMW i4 M50",
        price: 671900,
        image: "https://www.electrifying.com/files/NQmUpKl6w_HdJUDz/P90447147_highRes_bmw-i4-m50-uk-imager.jpeg",
        specs: {
          acceleration: "0-60 mph in 3.7s",
          topSpeed: "140 mph",
          range: "301 miles"
        },
        description: "An all-electric Gran Coupé with thrilling performance."
      },
      {
        id: 6,
        name: "Audi R8",
        price: 959030,
        image: "https://th.bing.com/th/id/OIP.pn2lJFCmUnibJ3iu8VMGQgHaEK?rs=1&pid=ImgDetMain",
        specs: {
          acceleration: "0-60 mph in 3.7s",
          topSpeed: "140 mph",
          range: "301 miles"
        },
        description: "An all-electric Gran Coupé with thrilling performance."
      },
      {
        id: 7,
        name: "Bentely Continental",
        price: 709200,
        image: "https://media.autoexpress.co.uk/image/private/s--dsad6H7D--/v1562247060/autoexpress/2018/11/2twin.jpg",
        specs: {
          acceleration: "0-60 mph in 3.7s",
          topSpeed: "140 mph",
          range: "301 miles"
        },
        description: "An all-electric Gran Coupé with thrilling performance."
      },
      {
        id: 8,
        name: "Porche 312",
        price: 997900,
        image: "https://i.pinimg.com/originals/53/64/9f/53649f6b4d70f7e2d2e5122e2d41322b.jpg",
        specs: {
          acceleration: "0-60 mph in 3.7s",
          topSpeed: "140 mph",
          range: "301 miles"
        },
        description: "An all-electric Gran Coupé with thrilling performance."
      },
    ],
  
    bikes: [
      {
        id: 1,
        name: "Kawasaki Ninja ZX-10R",
        price: 17399,
        image: "https://th.bing.com/th/id/OIP.rdiLMtvWeneqFcE4b7zQ-AHaD_?rs=1&pid=ImgDetMain",
        specs: {
          power: "203 HP",
          weight: "456 lbs",
          engine: "998 cc"
        },
        description: "A track-ready superbike designed for ultimate precision."
      },
      {
        id: 2,
        name: "Yamaha YZF-R1",
        price: 17399,
        image: "https://th.bing.com/th/id/OIP.LFlqlXZY488-qBnGqdhJ4QHaE8?rs=1&pid=ImgDetMain",
        specs: {
          power: "198 HP",
          weight: "448 lbs",
          engine: "998 cc"
        },
        description: "A legend in superbike racing, offering top-notch performance."
      },
      {
        id: 3,
        name: "Harley-Davidson Pan America 1250",
        price: 19299,
        image: "https://th.bing.com/th/id/OIP.0PPLBSofdm6bjPfmHbagAAHaE8?rs=1&pid=ImgDetMain",
        specs: {
          power: "150 HP",
          weight: "559 lbs",
          engine: "1,252 cc"
        },
        description: "An adventure bike that’s equally at home on-road and off-road."
      },
      {
        id: 4,
        name: "Suzuki Hayabusa",
        price: 18699,
        image: "https://ultimatemotorcycling.com/wp-content/uploads/2019/10/2020-suzuki-haybusa-buyers-guide-specs-prices-2.jpg",
        specs: {
          power: "188 HP",
          weight: "582 lbs",
          engine: "1,340 cc"
        },
        description: "An iconic hyperbike known for its raw power and smooth handling."
      },
      {
        id: 5,
        name: "Ducati Multistrada V4",
        price: 24995,
        image: "https://th.bing.com/th/id/OIP.Y2c8PIx4yrexK_YbEeJDCwHaE7?rs=1&pid=ImgDetMain",
        specs: {
          power: "170 HP",
          weight: "529 lbs",
          engine: "1,158 cc"
        },
        description: "A high-performance adventure bike with cutting-edge technology."
      },
    ],
  };
  

  const sortVehicles = (items) => {
    if (sortType === 'alphabet') {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'price') {
      return [...items].sort((a, b) => a.price - b.price);
    }
    return items;
  };

  const filterVehicles = (items) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <>
     <Navbar1/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ">
     
      {/* Facts Ticker */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-lg font-medium opacity-90 transition-opacity duration-500">
              {facts[currentFact]}
            </div>
          </div>
        </div>
      </div>

      {/* Search and Sort Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <select
            className="px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="alphabet">A-Z</option>
            <option value="price">0-999</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 m-7">
        <div className="flex gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'cars'
                ? 'bg-orange-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-orange-50'
            }`}
            onClick={() => setActiveTab('cars')}
          >
            Cars
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'bikes'
                ? 'bg-orange-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-orange-50'
            }`}
            onClick={() => setActiveTab('bikes')}
          >
            Bikes
          </button>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortVehicles(filterVehicles(vehicles[activeTab]))
            .slice(0, visibleItems)
            .map((vehicle) => (
              <div
                key={vehicle.id}
                className="group relative overflow-hidden rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20"
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{vehicle.name}</h3>
                  <p className="text-orange-500 font-medium mt-2">
                    ₹{vehicle.price.toLocaleString()}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
        </div>

        {/* Load More Button */}
        {visibleItems < vehicles[activeTab].length && (
          <div className="flex justify-center mt-8 mb-12">
            <button
              className="px-8 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
              onClick={() => setVisibleItems(prev => prev + 8)}
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                className="absolute right-4 top-4 p-2 rounded-full bg-white/40 hover:bg-white/20 transition-colors"
                onClick={() => setSelectedVehicle(null)}
              >
                <X size={20} />
              </button>
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedVehicle.name}
              </h2>
              <p className="text-xl text-orange-500 font-semibold mb-4">
                ${selectedVehicle.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-4">{selectedVehicle.description}</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications</h3>
                <dl className="grid grid-cols-2 gap-4">
                  {Object.entries(selectedVehicle.specs).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-gray-600 text-sm">{key}</dt>
                      <dd className="text-gray-800 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
    </>
  );
};

export default Collections;