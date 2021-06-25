import {createSelector} from 'reselect';

export const ticketsSelector = st => st.tickets;

export const selectedTabSelector = createSelector(
  ticketsSelector,
  tickets => tickets.selectedTab,
);
