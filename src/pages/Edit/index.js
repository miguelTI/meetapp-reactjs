import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { parseISO } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-datepicker/dist/react-datepicker.css';

import AvatarInput from '~/components/AvatarInput';

import api from '~/services/api';
import history from '~/services/history';
import { Container } from './styles';

async function handleSubmit(data) {
  await api.put(`meetups/${data.id}`, data);

  history.push('/dashboard');
}

function updateMeetup(meetup, setMeetup, date = null) {
  const dateToUse = date || parseISO(meetup.date);
  setMeetup({ ...meetup, date: dateToUse });
}

export default function Signup({ match }) {
  registerLocale('pt-BR', ptBR);
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeetup() {
      const meetupId = decodeURIComponent(match.params.meetupId);
      const response = await api.get(`meetups/${meetupId}`);

      updateMeetup(response.data, setMeetup);
      setLoading(false);
    }

    fetchMeetup();
  }, [match.params.meetupId]);

  if (loading) {
    return (
      <Container>
        <div>Carregando</div>
      </Container>
    );
  }

  return (
    <Container>
      <Form
        initialData={
          meetup.avatar
            ? meetup
            : {
                ...meetup,
                avatar: {
                  url:
                    'https://imgplaceholder.com/900x300/222222/757575/glyphicon-picture',
                },
              }
        }
        onSubmit={handleSubmit}
      >
        <Input name="id" type="hidden" />
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Titulo do meetup" />
        <Input name="description" multiline placeholder="Descrição completa" />
        <Input name="date" type="hidden" />
        <DatePicker
          selected={meetup.date}
          onChange={date => updateMeetup(meetup, setMeetup, date)}
          locale="pt-BR"
          dateFormat="Pp"
          minDate={new Date()}
        />
        <Input name="locale" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={16} color="#FFF" />
          <span>Salvar meetup</span>
        </button>
      </Form>
    </Container>
  );
}
