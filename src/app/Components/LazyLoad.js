import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const LazyLoadImage = ({ src, alt, placeholderSrc, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && !isLoaded) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                  setIsLoaded(true);
                };
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fall back to setTimeout for browsers that don't support IntersectionObserver
        setTimeout(() => setIsLoaded(true), 100);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, isLoaded, imageRef]);

  return (
    <div 
      ref={setImageRef}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Image
        src={isLoaded ? src : placeholderSrc}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: isLoaded ? 'none' : 'blur(20px)',
          transition: 'filter 0.3s ease-out'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LazyLoadImage;