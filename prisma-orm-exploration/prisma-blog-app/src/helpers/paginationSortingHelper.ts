type IOptions = {
  page?: number | string;
  limit?: number | string;
  sortBy?: string;
  sortOrder?: string;
};
type IOptionsResult = {
  page: number; // We didnt give optional in any of these
  limit: number; // Since we are always returning sth
  skip: number; // Regardless of if the option is provided or not
  sortBy: string;
  sortOrder: string;
};

const paginationSortingHelper = (options: IOptions): IOptionsResult => {
  // Pagination
  const page: number = Number(options.page) || 1;
  const limit: number = Number(options.limit) || 10;
  const skip: number = (page - 1) * limit;
  //Sorting
  const sortBy: string = options.sortBy || 'createdAt';
  const sortOrder: string = options.sortOrder || 'desc';
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export default paginationSortingHelper;
