import { Coords } from "google-map-react";

export type TypeInitState = {
    from: TypeFrom,
    to: TypeFrom,
    travelTime: number,
    selectedOption: string
}

export type TypeFrom = {
    location: Coords,
    discription: string
}