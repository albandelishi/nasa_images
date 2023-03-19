import api from "./axiosInterceptor";

export const getImages = async (
  PAGE_SIZE,
  currentPage,
  search,
  startYear,
  endYear
) => {
  try {
    const querySearch = search ? `&q=${search}` : "";
    const queryStartYear = startYear
      ? `&year_start=${startYear.getFullYear()}`
      : "";
    const queryEndYear = endYear ? `&year_end=${endYear.getFullYear()}` : "";
    const response = await api.get(
      `/search?page_size=${PAGE_SIZE}&page=${currentPage}&media_type=image${querySearch}${queryStartYear}${queryEndYear}`
    );
    return response;
  } catch (error) {
    return { message: error.message };
  }
};

export const fetchImages = async (
  PAGE_SIZE,
  currentPage,
  search,
  startYear,
  endYear
) => {
  const response = await getImages(
    PAGE_SIZE,
    currentPage,
    search,
    startYear,
    endYear
  );
  if (response.status === 200) {
    return response.data.collection.items;
  } else {
    alert(response);
  }
};
