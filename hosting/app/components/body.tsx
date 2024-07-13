/**
 * body.tsx
 *
 * This file contains the body component for the website.
 */

import Image from 'next/image';

// import band image
import bandImage from "../assets/band-pics/band-pic.jpg";

export const Body = () => {
    return (
        <div className="w-full flex flex-grow items-center relative">
            <Image
                alt="Pic of the band members"
                src={bandImage}
                fill
                objectFit="cover"
                sizes="100vw"
            />
        </div>
    );
}
