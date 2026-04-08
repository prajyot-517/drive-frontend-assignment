"use client";

interface CarInfoProps {
  kilometres: number;
  ageOfCar?: number;
  fuelType: string;
  chargeTimeHours?: number;
  safetyRating: string;
  engine: string;
  bodyType: string;
  rangeKm: number;
  warrantyLabel: string;
  warrantyRemaining: string;
  yearGroup: number;
  seriesPublic: string;
  driveCode: string;
  gearNum: number;
  gearTypeDescription: string;
  power: number;
  torqueRpmFrom: number;
  cylinders: number;
  engineDescription: string;
  fuelDeliveryDescription: string;
  inductionDescription: string;
  kerbWeight: number;
  grossVehicleMass: number;
  wheelBase: number;
  frontTyreSize: string;
  rearTyreSize: string;
}

interface StatTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatTile({ icon, label, value }: StatTileProps) {
  return (
    <div className="flex items-center gap-3 py-3">
      <span className="text-gray-400 w-6 shrink-0">{icon}</span>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-sm font-semibold text-gray-800">{value}</span>
      </div>
    </div>
  );
}

interface SpecRowProps {
  label: string;
  value?: string | number;
  unit?: string;
}

function SpecRow({ label, value, unit }: SpecRowProps) {
  if (!value && value !== 0) return null;
  return (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-800">
        {value}
        {unit ? ` ${unit}` : ""}
      </span>
    </div>
  );
}

export default function CarInfo({
  kilometres,
  ageOfCar,
  fuelType,
  chargeTimeHours,
  safetyRating,
  engine,
  bodyType,
  rangeKm,
  warrantyLabel = "Manufacturer Warranty",
  warrantyRemaining,
  yearGroup,
  seriesPublic,
  driveCode,
  gearNum,
  gearTypeDescription,
  power,
  torqueRpmFrom,
  cylinders,
  engineDescription,
  fuelDeliveryDescription,
  inductionDescription,
  kerbWeight,
  grossVehicleMass,
  wheelBase,
  frontTyreSize,
  rearTyreSize,
}: CarInfoProps) {
  return (
    <div className="w-full flex flex-col gap-6">
      {warrantyRemaining && (
        <div className="rounded-2xl bg-blue-800 text-white px-6 py-4 flex items-center gap-4">
          <svg
            className="w-8 h-8 shrink-0 opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <div>
            <p className="font-semibold text-sm">{warrantyLabel}</p>
            <p className="text-blue-200 text-sm">
              Estimated remaining: {warrantyRemaining}
            </p>
          </div>
          <span className="ml-auto text-xs font-bold tracking-widest opacity-70 uppercase">
            NUSED
          </span>
        </div>
      )}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm px-4 py-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-100">
          {kilometres !== undefined && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M12 8v4l2 2"
                    />
                  </svg>
                }
                label="Kilometres"
                value={`${kilometres.toLocaleString()} kms`}
              />
            </div>
          )}
          {ageOfCar !== undefined && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M16 2v4M8 2v4M3 10h18"
                    />
                  </svg>
                }
                label="Age of car"
                value={`${ageOfCar} year${ageOfCar !== 1 ? "s" : ""}`}
              />
            </div>
          )}
          {fuelType && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h2l2-7h10l2 7h2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z"
                    />
                  </svg>
                }
                label="Fuel type"
                value={fuelType}
              />
            </div>
          )}
          {chargeTimeHours !== undefined && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    />
                  </svg>
                }
                label="Charge time"
                value={`${chargeTimeHours}h 0m`}
              />
            </div>
          )}
          {safetyRating && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                }
                label="Safety rating"
                value={safetyRating}
              />
            </div>
          )}
          {engine && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 3H6a2 2 0 00-2 2v14a2 2 0 002 2h4M14 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 3v18M14 3v18"
                    />
                  </svg>
                }
                label="Engine"
                value={engine}
              />
            </div>
          )}
          {bodyType && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5M16 17a2 2 0 100 4 2 2 0 000-4zM7 17a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                }
                label="Body type"
                value={bodyType}
              />
            </div>
          )}
          {rangeKm !== undefined && (
            <div className="px-4">
              <StatTile
                icon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="12"
                      rx="2"
                      strokeWidth={2}
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2"
                    />
                  </svg>
                }
                label="Range"
                value={`${rangeKm} km`}
              />
            </div>
          )}
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
        <h2 className="text-base font-bold text-gray-800 mb-4">
          Vehicle Specifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
              Engine &amp; Performance
            </h3>
            <SpecRow label="Engine" value={engineDescription} />
            <SpecRow label="Cylinders" value={cylinders} />
            <SpecRow label="Induction" value={inductionDescription} />
            <SpecRow label="Fuel Delivery" value={fuelDeliveryDescription} />
            <SpecRow label="Power" value={power} unit="kW" />
            <SpecRow label="Torque (RPM from)" value={torqueRpmFrom} />
            <SpecRow label="Drive" value={driveCode} />
            <SpecRow label="Gears" value={gearNum} />
            <SpecRow label="Gearbox" value={gearTypeDescription} />
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
              Dimensions &amp; Weights
            </h3>
            <SpecRow label="Kerb Weight" value={kerbWeight} unit="kg" />
            <SpecRow label="GVM" value={grossVehicleMass} unit="kg" />
            <SpecRow label="Wheelbase" value={wheelBase} unit="mm" />
            <SpecRow label="Front Tyres" value={frontTyreSize} />
            <SpecRow label="Rear Tyres" value={rearTyreSize} />
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-4 mb-1">
              Series &amp; Model
            </h3>
            <SpecRow label="Year Group" value={yearGroup} />
            <SpecRow label="Series" value={seriesPublic} />
          </div>
        </div>
      </div>
    </div>
  );
}
