import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slideNext()}>{children}</div>;
};