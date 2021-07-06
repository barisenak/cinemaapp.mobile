import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const userSelector = get('user');

export const userDataSelector = createSelector(userSelector, get('userData'));
