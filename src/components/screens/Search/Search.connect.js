import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Search from './Search.component';

import {
  typedCinemaSelector,
  typedFilmSelector,
  filmsSelector,
  cinemasSelector,
} from 'app/redux/search/search.selector';
import {languageSelector} from 'app/redux/settings/settings.selector';

import {
  setTypedCinema,
  setTypedFilm,
  makeSearch,
  clearSearchedData,
} from 'app/redux/search/search.action';
import {getFilmCard} from 'app/redux/film/film.action';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';

import {CINEMA_CARD, FILMS, FILM_CARD, SEARCH} from 'app/enum/navigation.enum';

export default connect(
  createStructuredSelector({
    typedCinema: typedCinemaSelector,
    typedFilm: typedFilmSelector,
    films: filmsSelector,
    cinemas: cinemasSelector,
    language: languageSelector,
  }),
  {
    setTypedFilm,
    setTypedCinema,
    makeSearch,
    getFilmCard,
    clearSearchedData,
    getCinemaCard,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onSearch: () => {
        ownProps.route.params.prevScreen === FILMS
          ? dispatchProps.makeSearch({film: stateProps.typedFilm})
          : dispatchProps.makeSearch({cinema: stateProps.typedCinema});
      },

      onPressSearchItem: item => {
        if (stateProps.films.length) {
          dispatchProps.getFilmCard(item.id);
          ownProps.navigation.navigate(FILM_CARD, {
            name: item.name,
            filmId: item.id,
            prevScreen: SEARCH,
          });
        } else {
          dispatchProps.getCinemaCard(item.id);
          ownProps.navigation.navigate(CINEMA_CARD, {
            name: item.name,
            cinemaId: item.id,
            prevScreen: SEARCH,
          });
        }
      },
    };
  },
)(Search);
