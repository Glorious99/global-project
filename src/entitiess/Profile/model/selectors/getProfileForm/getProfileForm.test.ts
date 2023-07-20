import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  test("should return error", () => {
    const data = {
      username: "glorias",
      age: 22,
      country: Country.Russia,
      lastname: "Pupkin",
      first: "Pety",
      city: "Zalupinsk",
      currency: Currency.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
