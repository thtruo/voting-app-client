/* Skeleton for Redux middleware is a function that takes a Redux store and
 * returns another function that takes a `next` callback. That function returns
 * a third function that that takes a Redux action. The innermost function is
 * where the middleware implementation will actually go.
 *
 * This style of nesting single arg functions is called currying. `next` is a
 * callback that the middleware calls when it has done its work and the action
 * should be sent to the store (or next middleware).
 */

import objectAssign from 'object-assign';

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    socket.emit('action', objectAssign({}, action, {clientId}));
  }
  return next(action);
}

