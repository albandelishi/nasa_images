import api from "../axiosInterceptor";
import { act } from "react-dom/test-utils";
import { getImages } from "../images";
describe("getImages", () => {
  it("should return data when API call is successful", async () => {
    const PAGE_SIZE = 10;
    const currentPage = 1;
    const search = "mars";
    const startYear = new Date("2022-01-01");
    const endYear = new Date("2022-12-31");
    const mockData = { data: "mock data" };
    const mockGet = jest.spyOn(api, "get").mockImplementationOnce(() => {
      return Promise.resolve({
        status: 200,
        data: mockData,
      });
    });

    const response = await getImages(
      PAGE_SIZE,
      currentPage,
      search,
      startYear,
      endYear
    );

    expect(mockGet).toHaveBeenCalledWith(
      `/search?page_size=${PAGE_SIZE}&page=${currentPage}&media_type=image&q=${search}&year_start=2022&year_end=2022`
    );
    expect(response).toEqual({
      status: 200,
      data: mockData,
    });

    mockGet.mockRestore();
  });

  it("should return error message when API call fails", async () => {
    const PAGE_SIZE = 10;
    const currentPage = 1;
    const search = "mars";
    const startYear = new Date("2022-01-01");
    const endYear = new Date("2022-12-31");
    const mockError = { message: "mock error message" };
    const mockGet = jest.spyOn(api, "get").mockImplementationOnce(() => {
      throw mockError;
    });

    const response = await getImages(
      PAGE_SIZE,
      currentPage,
      search,
      startYear,
      endYear
    );

    expect(mockGet).toHaveBeenCalledWith(
      `/search?page_size=${PAGE_SIZE}&page=${currentPage}&media_type=image&q=${search}&year_start=2022&year_end=2022`
    );
    expect(response).toEqual(mockError);

    mockGet.mockRestore();
  });
});
