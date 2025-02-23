import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSliderProps {
  images: string[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl border-4 border-[#2A1810] aspect-video bg-[#FDF7ED] cuphead-border">
        <img
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {currentIndex > 0 ? (
          <button
            onClick={goToPrevious}
            className="transform -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white border-4 border-[#2A1810] text-[#2A1810] p-2 rounded-full hover:bg-[#FDF7ED] hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        ) : <div />}
        
        <button
          onClick={goToNext}
          className={`transform translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white border-4 border-[#2A1810] text-[#2A1810] p-2 rounded-full hover:bg-[#FDF7ED] hover:scale-110 ${
            currentIndex >= images.length - 1 ? 'hidden' : ''
          }`}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 py-10 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-4 border-[#2A1810] transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#B4432B] scale-125' 
                : 'bg-white hover:bg-[#FDF7ED]'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;