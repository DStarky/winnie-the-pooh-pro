import type { Country } from 'src/shared/const/common';

export interface Profile {
  first: string;
  last: string;
  phone: string;
  email: string;
  address: string;
  country: Country;
  city: string;
  region: string;
  zipcode: string;
  avatar: string;
}

export interface ProfileSchema{
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}