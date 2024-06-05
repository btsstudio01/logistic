import { useSwiper } from "swiper/react";

export const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slidePrev()}>{children}</div>;
};