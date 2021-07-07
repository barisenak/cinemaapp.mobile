import {connect} from 'react-redux';

import Search from './Search.component';

import {
  typedCinemaSelector,
  typedFilmSelector,
  filmsSelector,
  cinemasSelector,
} from 'app/redux/search/search.selector';
import {
  setTypedCinema,
  setTypedFilm,
  makeSearch,
  clearSearchedData,
} from 'app/redux/search/search.action';
import {getFilmCard} from 'app/redux/film/film.action';
import {CINEMA_CARD, FILMS, FILM_CARD} from 'app/enum/navigation.enum';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {languageSelector} from 'app/redux/settings/settings.selector';

export default connect(
  st => ({
    typedCinema: typedCinemaSelector(st),
    typedFilm: typedFilmSelector(st),
    films: filmsSelector(st),
    cinemas: cinemasSelector(st),
    language: languageSelector(st),
  }),
  {
    setTypedFilm: setTypedFilm,
    setTypedCinema: setTypedCinema,
    makeSearch: makeSearch,
    getFilmCard: getFilmCard,
    clearSearchedData: clearSearchedData,
    getCinemaCard: getCinemaCard,
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
          });
        } else {
          dispatchProps.getCinemaCard(item.id);
          ownProps.navigation.navigate(CINEMA_CARD, {
            name: item.name,
            cinemaId: item.id,
          });
        }
      },
    };
  },
)(Search);
