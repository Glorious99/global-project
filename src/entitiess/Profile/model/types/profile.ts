import { Country, Currency } from "shared/const/common";

export interface Profile {
  first: string;
  lastname: string;
  age: 24;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

//То, что у нас будет храниться в state
export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean; // доступен ли пользователь для редактирования
}
