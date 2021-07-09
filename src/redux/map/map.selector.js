import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const mapSelector = get('map');

export const locationSelector = createSelector(mapSelector, get('location'));

export const cinemasSelector = createSelector(mapSelector, get('cinemas'));

export const markersSelector = createSelector(mapSelector, get('markers'));
