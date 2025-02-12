import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useRef } from 'react';
import { Settings, default as Slider } from 'react-slick';
import { tm } from '../../utils/twMerge';
import { ProjdectType } from '../../utils/type';
import { IconBlendMode, IconBrandGithub } from '@tabler/icons-react';
import Card from './Card';
import './style/slider.scss';
type SliderComponenProps = {
  className?: string;
  list: ProjdectType[];
};
const SliderComponent = ({ className, list }: SliderComponenProps) => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    dots: true, // 도트
    arrows: false, // 화살표
    // autoplay: true, // 무한 재생
    autoplaySpeed: 5000, // 무한 재생 속도
    dotsClass: `slide-dots`,
  };
  const sliderRef = useRef<Slider>(null);
  return (
    <Slider ref={sliderRef} {...settings} className={tm(``, className)}>
      {list.map((project, i) => (
        <Card list={project} key={project.title} />
      ))}
    </Slider>
  );
};
export default SliderComponent;
