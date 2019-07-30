import { all, takeLatest } from 'redux-saga/effects';
// import api from '~/services/api';
import history from '~/services/history';

export function setMeetup() {
  history.push('/details');
}

export function unsetMeetup() {
  history.push('/dashboard');
}

export default all([
  takeLatest('@meetup/SET_MEETUP', setMeetup),
  takeLatest('@meetup/UNSET_MEETUP', unsetMeetup),
]);
