import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

//То, что у нас будет храниться в state
export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean; // доступен ли пользователь для редактирования
  validateErrors?: ValidateProfileError[];
}
