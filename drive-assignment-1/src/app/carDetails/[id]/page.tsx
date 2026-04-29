import CarImages from "@/app/components/CarImages";
import CarInfo from "@/app/components/CarInfo";
import ListingPanel from "@/app/components/ListingPanel";
import { GET_CAR_DETAILS } from "@/app/graphql/queries/carDetailsQuery";
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
 
interface PageProps {
  params: { id: string };
}
 
export default function CarListingPage({ params }: PageProps) {
  const { id } = useParams();
 
  const { data } = useQuery(GET_CAR_DETAILS, {
    variables: { dealerListingId: id },
  }) as { data: any };

  const listing = data?.DealerListing;
  const vehicle = listing?.RedbookVehicle;
  const images: { url: string }[] = listing?.DealerListingImages?.map(
    (img: { url: string }) => ({ url: img.url })
  ) ?? [];
 
  const ageOfCar = vehicle?.yearGroup
    ? new Date().getFullYear() - vehicle.yearGroup
    : undefined;
 
  const chargeTimeRaw = listing?.chargeTimeMinutes as number | undefined;
  const chargeTimeHours = chargeTimeRaw ? Math.floor(chargeTimeRaw / 60) : undefined;
 
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <a
        href="/"
        className="inline-flex items-center gap-1 text-blue-600 text-sm mb-6 hover:underline"
      >
        ← See similar cars
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <CarImages
          images={images}
          title={`${vehicle?.yearGroup ?? ""} ${listing?.make ?? ""} ${listing?.model ?? ""}`.trim()}
        />
        <div className="lg:row-span-1">
          <ListingPanel
            badge={listing?.listingType ?? "NUSED"}
            year={vehicle?.yearGroup}
            make={listing?.make}
            model={listing?.model}
            variant={vehicle?.bodyStyleDescription}
            price={listing?.price}
            originalPrice={listing?.originalPrice}
            driveAway={true}
            location={listing?.location}
            isPopular={listing?.isPopular ?? false}
          />
        </div>
      </div>
      <div className="mt-6">
        <CarInfo
          kilometres={listing?.odometer}
          ageOfCar={ageOfCar}
          fuelType={listing?.fuelType ?? "Electric"}
          chargeTimeHours={chargeTimeHours}
          safetyRating={listing?.safetyRating ?? "NA"}
          engine={`AC${vehicle?.power ?? ""}kW`}
          bodyType={vehicle?.bodyStyleDescription}
          rangeKm={listing?.rangeKm}
          warrantyLabel="Manufacturer Warranty"
          warrantyRemaining={listing?.warrantyRemaining}
          yearGroup={vehicle?.yearGroup}
          seriesPublic={vehicle?.seriesPublic}
          driveCode={vehicle?.driveCode}
          gearNum={vehicle?.gearNum}
          gearTypeDescription={vehicle?.gearTypeDescription}
          power={vehicle?.power}
          torqueRpmFrom={vehicle?.torqueRpmFrom}
          cylinders={vehicle?.cylinders}
          engineDescription={vehicle?.engineDescription}
          fuelDeliveryDescription={vehicle?.fuelDeliveryDescription}
          inductionDescription={vehicle?.inductionDescription}
          kerbWeight={vehicle?.kerbWeight}
          grossVehicleMass={vehicle?.grossVehicleMass}
          wheelBase={vehicle?.wheelBase}
          frontTyreSize={vehicle?.frontTyreSize}
          rearTyreSize={vehicle?.rearTyreSize}
        />
      </div>
    </main>
  );
}