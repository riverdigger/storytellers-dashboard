import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

const EmptyCollection = () => {

return (
    <div className="flex justify-center items-center h-96 w-full bg-theme-purple-500">
    <div className="text-xl font-bold text-light flex flex-col justify-center items-center">
        <FontAwesomeIcon icon={faWarning} className="text-4xl" />
        <span>No games found</span>
    </div>
    </div>
);
}

export default EmptyCollection;
