import React, { Component } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Form, Input } from '@rocketseat/unform';

import AvatarInput from '~/components/AvatarInput';

import api from '~/services/api';
import history from '~/services/history';
import { Container } from './styles';

async function handleSubmit(data) {
  await api.put(`meetups/${data.id}`, data);

  history.push('/dashboard');
}

export default class Signup extends Component {
  state = {
    loading: true,
    meetup: {},
  };

  async componentDidMount() {
    const { match } = this.props;

    const meetupId = decodeURIComponent(match.params.meetupId);
    const response = await api.get(`meetups/${meetupId}`);

    const meetup = {
      formattedDate: format(parseISO(response.data.date), "d 'de' MMMM", {
        locale: pt,
      }),
      ...response.data,
    };

    this.setState({
      meetup: meetup,
      loading: false,
    });
  }

  render() {
    const { meetup, loading } = this.state;

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
          <Input
            name="description"
            multiline
            placeholder="Descrição completa"
          />
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
}
