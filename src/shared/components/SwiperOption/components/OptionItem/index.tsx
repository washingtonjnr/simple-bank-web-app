import { useSwiper } from "swiper/react";
// Utils
import { cn } from "../../../../../core/utils/cn";

type OptionItemProps = {
  isActive: boolean;
  label: string | number;
  index: number;
};

export function OptionItem({ isActive, label, index }: OptionItemProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => {
        swiper.slideTo(index);
      }}
      className={cn(
        "w-full h-12 text-sm font-medium rounded-full text-gray-800 tracking-[-0.5px]",
        isActive && "bg-white"
      )}
    >
      {label}
    </button>
  );
}
