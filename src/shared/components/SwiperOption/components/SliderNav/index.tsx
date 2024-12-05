import { useSwiper } from "swiper/react";
// Components
import { ArrowButton } from "../../../Button/types/Arrow";

export function SliderNav() {
  const swiper = useSwiper();

  return (
    <>
      <ArrowButton
        className="h-12 rounded-none py-0 pl-0 pr-3 z-[1] absolute left-0 top-1/2 -translate-y-1/2 enabled:hover:bg-transparent"
        direction="left"
        disabled={swiper.isBeginning}
        onClick={() => swiper.slidePrev()}
      />

      <ArrowButton
        className="h-12 rounded-none py-0 pr-0 pl-3 z-[1] absolute right-0 top-1/2 -translate-y-1/2 enabled:hover:bg-transparent"
        direction="right"
        disabled={swiper.isEnd}
        onClick={() => swiper.slideNext()}
      />
    </>
  );
}
