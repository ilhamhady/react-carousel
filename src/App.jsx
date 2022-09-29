import { useState } from 'react';
import Carousel from './components/Carousel';

function App() {
  const slides = [
    'https://picsum.photos/id/1032/1200/400',
    'https://picsum.photos/id/1033/1200/400',
    'https://picsum.photos/id/1037/1200/400',
    'https://picsum.photos/id/1035/1200/400',
    'https://picsum.photos/id/1036/1200/400',
  ];

  return (
    <div>
      <Carousel
        slides={slides}
        controls
        indicators
        width={'100%'}
        imageWidth={'100%'}
        imageHeight={600}
        interval={3000}
        controlOn
      />
    </div>
  );
}

export default App;
