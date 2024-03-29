import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./profileSlice";
import {
  ProfileSchema,
  ValidateProfileError,
} from "../types/editableProfileCardSchema";

describe("profileSlice.test", () => {
  const data = {
    username: "glorias",
    age: 22,
    country: Country.Russia,
    lastname: "Pupkin",
    first: "Pety",
    city: "Zalupinsk",
    currency: Currency.USD,
  };

  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });
  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });
  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "" } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "asdasd" })
      )
    ).toEqual({
      form: { username: "asdasd" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
