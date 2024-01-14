import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

describe("validateProfileData", () => {
  const data = {
    username: "glorias",
    age: 22,
    country: Country.Russia,
    lastname: "Pupkin",
    first: "Pety",
    city: "Zalupinsk",
    currency: Currency.USD,
  };
  test("succes ", () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("without firts and last name ", () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
