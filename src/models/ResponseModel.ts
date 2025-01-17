type Meta = {
  status: number;
  msg: string;
  response_id: string;
};
type Pagination = {
  total_count: number;
  count: number;
  offset: number;
};
export interface ResponseModel {
  data: [];
  meta: Meta;
  pagination: Pagination;
}
