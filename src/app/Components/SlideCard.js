import React, { useState, useEffect, useRef, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../CSS/Components/slideCard.css';
import Image from 'next/image';


const LazyLoadImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isVisible ? (
              <Image src={src} alt={alt} className="work-card-image rounded-md mb-4" placeholder='blur' />

      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}
    </div>
  );
};


const WorkCard = ({ image, workType }) => (
  <div className="work-card flex flex-col items-center bg-white rounded-lg shadow-md p-4 m-2 w-64">
      {/* <Image src={image} alt={workType} className="work-card-image rounded-md mb-4" placeholder='blur' /> */}
      <LazyLoadImage src={image} alt={workType} className="work-card-image rounded-md mb-4" />    
    <h3 className="work-type-text text-lg">{workType}</h3>
  </div>
);

const SlideCard = ({ works = [], buttons = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (works.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [works.length]);

  useEffect(() => {
    if (carouselRef.current && works.length > 0) {
      carouselRef.current.scrollTo({
        left: currentIndex * 272, // 272 = card width (256) + margin (16)
        behavior: 'smooth'
      });
    }
  }, [currentIndex, works.length]);

  const handlePrev = () => {
    if (works.length === 0 || !carouselRef.current) return;
    const containerWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft -= containerWidth;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length);
  };

  const handleNext = () => {
    if (works.length === 0 || !carouselRef.current) return;
    const containerWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft += containerWidth;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  if (works.length === 0) {
    return <div className="text-center p-4">No works to display</div>;
  }

  return (
    <div className="parent-card-box">
      <div
        ref={carouselRef}
        className="card-box"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
      {works.length > 1 && buttons &&(
        <>
          <button
            onClick={handlePrev}
            className="work-carousel-nav-button absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="work-carousel-nav-button absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default SlideCard;