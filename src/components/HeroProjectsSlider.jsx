"use client";

import { useRef, useState } from "react";
import HeroProject from "@/components/HeroProject";
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECTS } from "@/app/projects/consts";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function HeroProjectsSlider() {
  const [isAutoPlayStopped, setIsAutoPlayStopped] = useState(false);
  const progressCircle = useRef(null);
  const swiperRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style?.setProperty?.("--progress", 1 - progress);
  };
  const stopAutoplay = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      slidesPerView={1}
      spaceBetween={16}
      modules={[EffectFade, Navigation, Autoplay, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation={true}
      pagination={true}
      speed={400}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      onAutoplayStop={(swiper) => {
        if (!swiper.autoplay.paused) return;
        setIsAutoPlayStopped(true);
      }}
    >
      {PROJECTS.map((project, i) => (
        <SwiperSlide key={i}>
          <HeroProject project={project} stopAutoPlay={stopAutoplay} />
        </SwiperSlide>
      ))}
      {!isAutoPlayStopped && (
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
        </div>
      )}
    </Swiper>
  );
}
