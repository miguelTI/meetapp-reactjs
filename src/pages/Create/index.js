import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from '~/components/AvatarInput';

import api from '~/services/api';
import history from '~/services/history';
import { Container } from './styles';

export default function Signup() {
  async function handleSubmit(data) {
    await api.post('meetups', data);

    history.push('/dashboard');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Titulo do meetup" />
        <Input name="description" multiline placeholder="Descrição completa" />
        <Input name="date" type="date" placeholder="Data do meetup" />
        <Input name="locale" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={16} color="#FFF" />
          <span>Salvar meetup</span>
        </button>
      </Form>
    </Container>
  );
}
