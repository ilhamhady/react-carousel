const CarouselItem = ({
  slide,
  stopSlide,
  startSlide,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div
      className='carousel-item'
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img width={imageWidth} height={imageHeight} src={slide} />
    </div>
  );
};

export default CarouselItem;
