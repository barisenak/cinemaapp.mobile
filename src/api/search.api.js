import {fetchJSON} from 'app/utils/fetch.util';

export const fetchSearchCinemaData = ({name = ''} = {}) => {
  return fetchJSON('cinemas/search', {
    query: {
      name,
    },
  });
};

export const fetchSearchFilmData = ({name = ''} = {}) => {
  return fetchJSON('films/search', {
    query: {
      name,
    },
  });
};
