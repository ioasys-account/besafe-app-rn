import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/profile';
import { api } from 'utils';
import constants from 'config/constants';

function* update(payload) {
  try {
    console.log('PAYLOAD ->', payload);
    const response = yield api.patch(constants.api.profile.updateProfile);
    yield put({
      type: Types.UPDATE_PROFILE_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: Types.UPDATE_PROFILE_FAIL,
      errors: [error]
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.UPDATE_PROFILE_REQUEST, update);
}
