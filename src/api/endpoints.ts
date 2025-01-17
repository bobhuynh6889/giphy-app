type Params = Record<string, string | number | boolean | null | undefined>;

const buildQueryString = (params: Params): string => {
  return new URLSearchParams(
    Object.entries(params).reduce(
      (acc: Record<string, string>, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      },
      {}
    )
  ).toString();
};

const endpoints = {
  trending: (params: Params): string => `trending?${buildQueryString(params)}`,
  searching: (params: Params): string => `search?${buildQueryString(params)}`,
};

export default endpoints;
