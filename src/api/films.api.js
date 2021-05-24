import {fetchJSON} from 'app/utils/fetch.util';

export const fetchFilms = ({
  pageNumber = 1,
  pageSize = 5,
  category = '',
} = {}) =>
  fetchJSON('films/all', {
    query: {
      page_number: pageNumber,
      page_size: pageSize,
      category,
    },
  });
