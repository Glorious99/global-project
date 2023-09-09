import { Country } from "entitiess/Country";
import { Currency } from "entitiess/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData", () => {
  const data = {
    username: "glorias",
    age: 22,
    country: Country.Russia,
    lastname: "Pupkin",
    first: "Pety",
    city: "Zalupinsk",
    currency: Currency.USD,
  };
  test("succes ", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error ", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(undefined);
  });
});
