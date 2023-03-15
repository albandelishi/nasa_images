import api from "./axiosInterceptor";

export const getImages = async (search, startYear, endYear) => {
    try {
      console.log({ search, startYear, endYear });
   const querySearch = search ? `&q=${search}` : "";
   const queryStartYear = startYear ? `&q=${startYear}` : "";
   const queryEndYear = endYear ? `&q=${endYear}` : "";

  const response = await api.get(
    `search?page_size=6&media_type=image${querySearch}${queryStartYear}${queryEndYear}`
  );
  return response;
  } catch (error) {
    return error.message;
  }
};