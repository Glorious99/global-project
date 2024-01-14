import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";

describe("getProfileValidateErrors", () => {
  const errors = [
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.INCORRECT_COUNTRY,
    ValidateProfileError.INCORRECT_USER_DATA,
    ValidateProfileError.NO_DATA,
    ValidateProfileError.SERVER_ERROR,
  ];
  test("should work validateErrors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
