import { gql } from "@apollo/client";

export const GET_CAR_LISTS = gql`
  query GetCarLists {
    DealerListings {
    results {
      carId:id
      carColor:exteriorColour
      carYear:year
      carName:makeDescription
      carFuelType:fuelTypeDescription
      newPrice:newPrice
      km:odometer
      oldPrice:price
      transmission:gearTypeDescription
      engineName:engineSize
      carRegion: Region {
        state
      }
      mainImage {
        url
      }
    }
  }
  }
`;
