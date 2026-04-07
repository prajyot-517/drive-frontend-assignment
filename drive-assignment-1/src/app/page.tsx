"use client";

import Card from "./components/Card";
import { useQuery } from "@apollo/client/react";
import { GET_CAR_LISTS } from "./graphql/queries/carListsQuery";

type CarDataProps = {
  carId: number;
  carName: string;
  carYear: number;
  oldPrice: number;
  newPrice: number;
  km: number;
  carFuelType: string;
  transmission: string;
  carRegion?: { state: string };
  mainImage?: { url: string };
};

export default function Home() {
  const { data } = useQuery<{ DealerListings: { results: CarDataProps[] } }>(
    GET_CAR_LISTS,
  );

  const cars = data?.DealerListings?.results?.slice(0, 15) || [];

  return (
    <div className="items-center justify-items-center min-h-screen p-4">
      <main className="flex flex-col gap-8 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars?.length > 0 &&
            cars?.map((car: CarDataProps) => (
              <Card
                key={car?.carId}
                id={car?.carId}
                name={car?.carName}
                title={`${car?.carYear}`}
                newPrice={car?.newPrice}
                oldPrice={car?.oldPrice}
                kms={car?.km}
                fuel={car?.carFuelType}
                transmission={car?.transmission}
                location={car?.carRegion?.state}
                image={car?.mainImage?.url?? "/car-image.jpg"}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
