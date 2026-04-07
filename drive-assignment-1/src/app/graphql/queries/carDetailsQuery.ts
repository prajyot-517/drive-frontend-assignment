import { gql } from "@apollo/client";

export const GET_CAR_DETAILS = gql`
  query GetCarDetails ($dealerListingId: BigInt!) {
  DealerListing(id: $dealerListingId) {
    RedbookVehicle {
      yearGroup
      seriesPublic
      buildCountryOriginDescription
      limitedEdition
      bodyConfigDescription
      manufacturerBodyConfig
      bodyStyleDescription
      manufacturerBodyStyle
      badgeCode
      badgeSecondaryDescription
      badgeDescription
      seriesModelYear
      modelCode
      familyCode
      torqueRpmFrom
      engineLocation
      engineDescription
      inductionDescription
      engineConfigurationDescription
      cylinders
      camDescription
      fuelDeliveryDescription
      power
      powerRpmFrom
      powerRpmTo
      acceleration
      altEngTorque
      driveCode
      gearNum
      gearTypeDescription
      gearLocationDescription
      manufacturerWheelBaseConfig
      wheelBaseConfig
      wheelBase
      frontRimDesc
      frontTyreSize
      rearRimDesc
      rearTyreSize
      kerbWeight
      tareMass
      grossVehicleMass
      grossCombinationMass
    }
    DealerListingImages {
      url
    }
  }
}
`;