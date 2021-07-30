import {PAGE_NUMBER, PAGE_SIZE} from 'app/enum/pagination.enum';
import {fetchJSON} from 'app/utils/fetch.util';

export const fetchFilms = ({
  pageNumber = PAGE_NUMBER,
  pageSize = PAGE_SIZE,
  category = '',
} = {}) =>
  fetchJSON('films/all', {
    query: {
      page_number: pageNumber,
      page_size: pageSize,
      category,
    },
  });
