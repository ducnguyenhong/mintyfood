import { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';

const HomeSlider: React.FC = () => {
  return (
    <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="/images/slide-1.png" />
      </div>
      <div>
        <img src="/images/slide-2.png" />
      </div>
      <div>
        <img src="/images/slide-3.png" />
      </div>
    </Carousel>
  );
}

export default memo(HomeSlider)