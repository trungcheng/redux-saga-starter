import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

// Our worker Saga: will perform the async increment task
// delay - a utility function that returns a Promise that will resolve after a specified number of milliseconds.
// incrementAsync Saga is suspended until the Promise returned by delay resolves, which will happen after 2 second.
// put - dispatch an INCREMENT action.
export function* incrementAsync() {
  yield delay(2000);
  yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// takeEvery - listen for dispatched INCREMENT_ASYNC actions and run incrementAsync each time.
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}