import { useMemo } from 'react';
import type { Settings as SlickSettings } from 'react-slick';
import type { SwiperOptions } from 'swiper/types';

type CarouselType = 'slick' | 'swiper';

interface BaseOptions {
    slidesPerView?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    pagination?: boolean;
    navigation?: boolean;
}

interface UseCarouselSettingsReturn {
    slickSettings?: SlickSettings;
    swiperSettings?: SwiperOptions;
}

export const useCarouselSettings = (
    type: CarouselType,
    options: BaseOptions = {}
): UseCarouselSettingsReturn => {
    const {
        slidesPerView = 1,
        autoplay = true,
        autoplayDelay = 3000,
        loop = true,
        pagination = true,
        navigation = true,
    } = options;

    const slickSettings: SlickSettings = {
        slidesToShow: slidesPerView,
        slidesToScroll: 1,
        autoplay,
        autoplaySpeed: autoplayDelay,
        infinite: loop,
        dots: pagination,
        arrows: navigation,
        speed: 500,
    };

    const swiperSettings: SwiperOptions = {
        slidesPerView,
        loop,
        autoplay: autoplay ? { delay: autoplayDelay } : false,
        pagination: pagination ? { clickable: true } : undefined,
        navigation,
        speed: 500,
    };

    return useMemo(() => {
        return type === 'slick'
            ? { slickSettings }
            : { swiperSettings };
    }, [type, slickSettings, swiperSettings]);
};
