/**
 * @param {String} type redux action type
 * @returns {Function} redux action creator
 */
export function createAction(type) {
  console.log(type);
  return (payload = {}) => ({
    type,
    payload,
  });
}

export function createReducer(initialState, actions = {}) {
  return (state = initialState, {type, payload}) =>
    ({...state, ...actions[type]?.(state, payload)} ?? state);
}
