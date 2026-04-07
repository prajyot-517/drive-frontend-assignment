"use client";

import Image from "next/image";
import { useState } from "react";

interface CarImagesProps {
  images?: { url: string }[];
  title?: string;
}

export default function CarImages({
  images = [],
  title = "Car",
}: CarImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayImages =
    images.length > 0
      ? images
      : [
          { url: "/placeholder-car.jpg" },
          { url: "/placeholder-interior.jpg" },
          { url: "/placeholder-front.jpg" },
        ];

  const main = displayImages[activeIndex];
  const thumbs = displayImages.slice(0, 4);
  const extra = displayImages.length - 4;

  return (
    <div className="w-full grid grid-cols-3 gap-2 h-63">
      <div className="relative col-span-2 rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={main.url}
          alt={`${title} - image ${activeIndex + 1}`}
          fill
          className="object-cover transition-all duration-300"
          priority
        />
      </div>
      <div className="grid grid-rows-2 gap-2">
        {thumbs.slice(1, 3).map((img, i) => (
          <div
            key={i + 1}
            onClick={() => setActiveIndex(i + 1)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer bg-gray-100 border-2 transition-all duration-200 ${
              activeIndex === i + 1
                ? "border-blue-600"
                : "border-transparent opacity-80 hover:opacity-100"
            }`}
          >
            <Image
              src={img.url}
              alt={`${title} thumbnail ${i + 2}`}
              fill
              className="object-cover"
            />
            {i === 1 && extra > 0 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white font-semibold text-sm">
                  + {extra + 2} Photos
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
