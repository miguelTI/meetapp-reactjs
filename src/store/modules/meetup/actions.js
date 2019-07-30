export function setMeetupRequest(meetup) {
  return {
    type: '@meetup/SET_MEETUP',
    payload: { meetup },
  };
}

export function unsetMeetup() {
  return {
    type: '@meetup/UNSET_MEETUP',
  };
}
