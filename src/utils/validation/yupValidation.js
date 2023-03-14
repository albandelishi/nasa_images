import * as yup from "yup";
export const searchForm = yup.object().shape({
  search: yup.string(),
  startDate: yup.string(),
  endDate: yup.string()
});
