import { IHotel } from "./hotels.interface";

export interface IUpdatePayload {
  id: string;
  hotel: IHotel;
}
