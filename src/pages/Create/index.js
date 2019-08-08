import React, { useState } from 'react';
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
  await api.post('meetups', data);

  history.push('/dashboard');
}

function updateMeetup(meetup, setMeetup, date = null) {
  const dateToUse = date || meetup.date;
  setMeetup({ ...meetup, date: dateToUse });
}

export default function Signup() {
  registerLocale('pt-BR', ptBR);
  const [meetup, setMeetup] = useState({
    name: '',
    description: '',
    locale: '',
    avatar: {
      url: 'https://imgplaceholder.com/900x300/222222/757575/glyphicon-picture',
    },
    date: new Date(),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={meetup}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Título do meetup" />
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
