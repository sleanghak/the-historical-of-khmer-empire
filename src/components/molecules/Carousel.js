import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";


const Carousel = ({}) => {
    return (
        <>
            <TECarousel showControls showIndicators crossfade ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="  h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/60/Angkor_Wat_Temple.jpg')]"></div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="  h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://static1.squarespace.com/static/591189e0ff7c50491ed75630/591ae206d482e9abfd2b9d71/59af24d1e6f2e1f5b6071b50/1504650457180/apsara-dancers-angkor-wat-7.jpg')]"></div>

                    </TECarouselItem>
                    <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="  h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://i.pinimg.com/736x/d1/c2/20/d1c220f16e4333f78b24ca1b104677c2--contours-the-natural.jpg')]"></div>

                    </TECarouselItem>
                </div>
            </TECarousel>
        </>
    );
};
export default Carousel;