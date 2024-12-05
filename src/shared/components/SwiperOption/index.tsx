import { Swiper, SwiperSlide } from "swiper/react";
// Components (Intenal)
import { SliderNav } from "./components/SliderNav";
import { OptionItem } from "./components/OptionItem";

type OptionType = {
  alias: string | number;
  label: string | number;
};

type SwiperOptionsProps = {
  initialSlide?: number;
  slidesPerView: number;
  options: OptionType[];
  setState({
    isBeginning,
    isEnd,
    selected,
    index,
  }: {
    isBeginning: boolean;
    isEnd: boolean;
    selected: number;
    index: number;
  }): void;
};

export function SwiperOptions({ initialSlide, slidesPerView, options, setState }: SwiperOptionsProps) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        initialSlide={initialSlide}
        onSlideChange={(swipper) => {
          setState({
            isBeginning: swipper.isBeginning,
            isEnd: swipper.isEnd,
            selected: swipper.activeIndex,
            index: swipper.realIndex,
          });
        }}
      >
        {options.map(({ label, alias }, index) => {
          return (
            <SwiperSlide key={alias}>
              {({ isActive }) => (
                <OptionItem
                  isActive={isActive}
                  label={label}
                  index={index}
                />
              )}
            </SwiperSlide>
          );
        })}

        <SliderNav />
      </Swiper>
    </div>
  );
}
