const CarouselIndicators = ({ slides, currentIndex, switchIndex, dotsOn }) => {
  return (
    <div className='carousel-indicators'>
      {slides.map((_, index) => (
        <button
          className={`carousel-indicator-item${
            currentIndex === index ? ' active' : ''
          }`}
          onClick={() => switchIndex(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
