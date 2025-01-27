import Image from "next/image";
import { RCIcon } from "@/components";
import banner_stock from "@/assets/home/banner_stock.webp";

export const BannerRC = () => {
    return (
        <div className="w-full relative aspect-video lg:aspect-auto">
            <div className="size-24 lg:size-52 rounded-full bg-neutral-900/50 flex justify-center items-center absolute top-8 lg:top-auto lg:bottom-16 left-8 lg:left-auto lg:right-16 z-20">
                <RCIcon className="fill-white w-16 lg:w-36"/>
            </div>
            <div className="size-full bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900 absolute top-0 left-0 z-10"></div>
            <Image src={banner_stock} alt="RC Gym" className="size-full object-cover"/>
        </div>
    )
}
