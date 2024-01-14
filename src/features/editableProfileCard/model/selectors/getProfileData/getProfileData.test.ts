import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("succes loading Data", () => {
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
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("Undefined State", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
