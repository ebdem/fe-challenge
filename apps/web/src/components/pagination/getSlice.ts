export const getSlice = (page: number, limit: number) => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return {
      start,
      end,
    };
  };