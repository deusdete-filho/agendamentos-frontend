import React, { useEffect, useState } from 'react';
import { MdContentCut, MdDateRange } from 'react-icons/md';
import { getHours, parseISO, format } from 'date-fns';

import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import {
  Container,
  Content,
  EmptyContent,
  MyAppointments,
} from './styles';
import { useAuth } from '../../hooks/AuthContext';
import calendar from '../../assets/calendar.png';
import api from '../../services/api';
import LoadClientAppointments from '../../components/Loadings/LoadClientAppointments';
import Header from '../../components/Header';

interface IAppointment {
  id: string;
  date: string;
  hourEnd: string;
  hourStart: string;
}

const SelectProvider: React.FC = () => {
  const { user } = useAuth();

  const [myAppointments, setMyAppointments] = useState([]);
  const [loadMyAppointments, setLoadMyAppointments] = useState(false);

  useEffect(() => {
    setLoadMyAppointments(true);
    api.get('/appointments/client').then(response => {
      const appointmentsFormatted = response.data.map(
        (appointment: IAppointment) => {
          return {
            ...appointment,
            hourStart: `${String(getHours(parseISO(appointment.date))).padStart(
              2,
              '0',
            )}:00`,
            hourEnd: `${String(
              getHours(parseISO(appointment.date)) + 1,
            ).padStart(2, '0')}:00`,
          };
        },
      );

      setMyAppointments(appointmentsFormatted);
      setLoadMyAppointments(false);
    });
  }, []);

  return (
    <Container>
      <Header>

      </Header>
      <Content>
        <h1>Meus Agendamentos</h1>

        {loadMyAppointments && <LoadClientAppointments />}

        {!myAppointments.length && !loadMyAppointments && (
          <EmptyContent>
            <div>
              <img src={calendar} alt="" />
            </div>
            <span>Nenhum agendamento futuro</span>
            <Link to="/c/appointments/select-provider">Criar Agendamento</Link>
          </EmptyContent>
        )}

        {myAppointments && (
          <MyAppointments>
            {myAppointments.map((appointment: IAppointment) => (
              <li key={appointment.id}>
                <div>
                  <div className="left">
                    <span>
                      <MdDateRange color="#B9B9B9" size={22} />
                    </span>

                    <div>
                      <strong>Agendamento</strong>
                      <p>{`${appointment.hourStart} - ${appointment.hourEnd} - ${format(parseISO(appointment.date), 'dd/MM/yyyy HH:mm:ss')}`}</p>
                    </div>
                  </div>

                  <Avatar size={35} />
                </div>
              </li>
            ))}
          </MyAppointments>
        )}
      </Content>
    </Container>
  );
};

export default SelectProvider;
