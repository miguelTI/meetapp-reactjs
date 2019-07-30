import React, { Component } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Right, Avatar, Description, Info } from './styles';

async function handleCancelMeetup(meetupId) {
  await api.delete(`meetups/${meetupId}`);

  history.push('/');
}

export default class Details extends Component {
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
        <header>
          <strong>{meetup.name}</strong>
          <Right>
            <Link to={`/edit/${meetup.id}`}>
              <MdAddCircleOutline size={16} color="#FFF" />
              <span>Editar</span>
            </Link>
            <button type="button" onClick={() => handleCancelMeetup(meetup.id)}>
              <MdAddCircleOutline size={16} color="#FFF" />
              <span>Cancelar</span>
            </button>
          </Right>
        </header>
        <Avatar src={meetup.avatar.url} />
        <Description>{meetup.description}</Description>
        <Info>
          <span>{meetup.formattedDate}</span>
          <span>{meetup.locale}</span>
        </Info>
      </Container>
    );
  }
}
