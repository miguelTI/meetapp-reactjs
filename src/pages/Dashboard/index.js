import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { Container, Meetup, Right } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('dashboard');

      const data = response.data.map(meetup => ({
        formattedDate: format(parseISO(meetup.date), "d 'de' MMMM", {
          locale: pt,
        }),
        ...meetup,
      }));

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/create">
          <MdAddCircleOutline size={16} color="#FFF" />
          <span>Novo meetup</span>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={String(meetup.id)}>
            <strong>{meetup.name}</strong>
            <Right>
              <span>{meetup.formattedDate}</span>
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight size={18} color="#FFF" />
              </Link>
            </Right>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
