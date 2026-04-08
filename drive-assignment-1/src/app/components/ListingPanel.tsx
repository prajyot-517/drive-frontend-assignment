"use client";

import { formatPrice } from "../utils/formatPrice";

interface ListingPanelProps {
  badge?: string;
  year?: number;
  make?: string;
  model?: string;
  variant?: string; 
  price?: number;
  originalPrice?: number;
  driveAway?: boolean;
  location?: string;
  isPopular?: boolean;
}

 
export default function ListingPanel({
  badge = "NUSED",
  year,
  make,
  model,
  variant,
  price,
  originalPrice,
  driveAway = true,
  location,
  isPopular = false,
}: ListingPanelProps) {
  const title = [year, make, model].filter(Boolean).join(" ");
 
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {badge && (
            <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md tracking-wide uppercase">
              {badge}
            </span>
          )}
          <span className="border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1 rounded-md">
            Demo
          </span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            {title || "Vehicle Listing"}
          </h1>
          {variant && (
            <p className="text-gray-500 text-sm mt-1">{variant}</p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-3xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {originalPrice != null && (
            <span className="text-lg text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        {driveAway && (
          <p className="text-gray-500 text-xs -mt-3">Drive Away ⓘ</p>
        )}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1 border border-teal-500 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4H6l4 4 4-4h-3V7z" />
            </svg>
            Great Price
          </span>
          <span className="flex items-center gap-1 border border-teal-500 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3l1.5 4.5H16l-3.5 2.5 1.5 4.5L10 12l-4 2.5 1.5-4.5L4 7.5h4.5z" />
            </svg>
            Price Drop
          </span>
        </div>
        {location && (
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        )}
      </div>
      {isPopular && (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex items-start gap-3">
          <span className="text-orange-500 text-xl">🔥</span>
          <div>
            <p className="text-blue-700 font-semibold text-sm">Good find!</p>
            <p className="text-gray-500 text-sm">
              This car is proving popular today. Don&apos;t miss out!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}