import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export type CarDataProps = {
  id: number;
  name: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  kms: number;
  fuel: string;
  transmission: string;
  location: string;
  image: string;
};

const Card = ({
  id,
  name,
  title,
  newPrice,
  oldPrice,
  kms,
  fuel,
  transmission,
  location,
  image,
}: CarDataProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
      <Image
        src={image || "/car-placeholder.jpg"}
        alt={name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-3">
        <div>
          <h2 className="font-semibold text-base text-gray-900">
            {name || "—"}
          </h2>
          <p className="text-gray-600 text-sm mt-0.5">{title || "—"}</p>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${newPrice ? newPrice.toLocaleString() : "—"}
            </span>
            {oldPrice && (
              <span className="text-lg line-through text-gray-400">
                ${oldPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        <hr className="border-gray-100" />
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{kms ? `${kms.toLocaleString()} km` : "— km"}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 6h12M3 10h12M5 6V4h8v2M19 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6"
              />
            </svg>
            <span>{fuel || "—"}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 9l4-4 4 4M8 15l4 4 4-4"
              />
            </svg>
            <span>{transmission || "—"}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>
              {location ? `${location} based dealer` : "— based dealer"}
            </span>
          </div>
        </div>
        <button
          className="w-full mt-2 py-2 rounded-lg border border-blue-900 text-blue-900 text-sm font-medium hover:bg-blue-900 hover:text-white transition-colors"
          onClick={() => router.push(`/carDetails/${id}`)}
        >
          View car
        </button>
      </div>
    </div>
  );
};

export default Card;
