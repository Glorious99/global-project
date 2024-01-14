import { StateSchema } from "app/providers/StoreProvider";
import { getProfileFirstname } from "./getProfileFirstname";

describe("getProfileFirstname", () => {
  test("should return firstname", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: "pypkin",
        },
      },
    };
    expect(getProfileFirstname(state as StateSchema)).toEqual("pypkin");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFirstname(state as StateSchema)).toEqual("");
  });
});
