import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

export default function SunglassesCollection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const sunglasses = [
    {
      id: 1,
      name: "Aviator Classic",
      price: "₹2,999",
      originalPrice: "₹4,999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop",
      color: "Gold/Black",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Wayfarer Bold",
      price: "₹3,499",
      originalPrice: "₹5,999",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
      color: "Matte Black",
      badge: "New"
    },
    {
      id: 3,
      name: "Round Vintage",
      price: "₹2,499",
      originalPrice: "₹3,999",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=600&fit=crop",
      color: "Tortoise Shell",
      badge: "Trending"
    },
    {
      id: 4,
      name: "Cat Eye Glam",
      price: "₹3,999",
      originalPrice: "₹6,499",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=600&fit=crop",
      color: "Burgundy",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Sport Shield",
      price: "₹4,499",
      originalPrice: "₹7,999",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=600&fit=crop",
      color: "Silver Mirror",
      badge: "New"
    },
    {
      id: 6,
      name: "Clubmaster Retro",
      price: "₹2,799",
      originalPrice: "₹4,499",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600&h=600&fit=crop",
      color: "Black/Gold",
      badge: "Classic"
    },
    {
      id: 7,
      name: "Oversized Diva",
      price: "₹3,299",
      originalPrice: "₹5,499",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1506208953892-500fe5b2eb18?w=600&h=600&fit=crop",
      color: "Gradient Brown",
      badge: "Trending"
    },
    {
      id: 8,
      name: "Hexagon Edge",
      price: "₹3,799",
      originalPrice: "₹5,999",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=600&fit=crop",
      color: "Rose Gold",
      badge: "Limited"
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const getBadgeStyles = (badge) => {
    const styles = {
      "Bestseller": "bg-amber-500 text-black",
      "New": "bg-emerald-500 text-white",
      "Trending": "bg-pink-500 text-white",
      "Premium": "bg-purple-600 text-white",
      "Classic": "bg-slate-700 text-white",
      "Limited": "bg-red-500 text-white"
    };
    return styles[badge] || "bg-gray-600 text-white";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              <span>PREMIUM COLLECTION</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Dhoop Ka Collection
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light tracking-wide">
            Apni personality ko naya dimension dijiye hamare exclusive sunglasses collection ke saath
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sunglasses.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`${getBadgeStyles(item.badge)} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md`}>
                    {item.badge}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      favorites.has(item.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1 font-medium">
                      {item.rating}
                    </span>
                  </div>

                  {/* Name & Color */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{item.color}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-black text-orange-600">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {item.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            View All Collection →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}