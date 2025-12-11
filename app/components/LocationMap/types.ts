export type Location = {
  name: string;
  city: string;
  address: string;
  phone: string;
  coordinates: [number, number];
};

export type LocationMapProps = {
  locations: Location[];
};
