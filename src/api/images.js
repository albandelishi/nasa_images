import api from "./axiosInterceptor";

export const getImages = async (search, startYear, endYear) => {
    try {
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

export const fetchImages = async (search, startYear, endYear) => {
    const response = await getImages(search, startYear, endYear);
    if (response.status === 200) {
     return response.data.collection.items;
    } else {
      alert(response);
    }
  };