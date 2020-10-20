import React, { useState, useEffect } from 'react';

import { MdEvent, MdSchedule, MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Avatar from '../../components/Avatar';
import { Container,  Content, BoxProvider } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';
import Footer from '../../components/Footer';
import history from '../../utils/history';
import LoadProviders from '../../components/Loadings/LoadProviders';
import Header from '../../components/Header';

interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

const SelectProvider: React.FC = () => {
  const [providers, setProviders] = useState<IProvider[]>([]);
  const { user } = useAuth();
  const [loadProviders, setLoadProviders] = useState(false);

  useEffect(() => {
    try {
      setLoadProviders(true);
      api.get('/providers').then(response => {
        setProviders(response.data);
        setLoadProviders(false);
      });
    } catch (error) {
      toast.error('Error ao ler prestadores de serviço');
      setLoadProviders(false);
    }
  }, []);

  return (
    <Container>
      <Header>

      </Header>
      <Content>
<h1>Selecione um profissional</h1>
        {loadProviders && <LoadProviders />}

        {!loadProviders &&
          providers.map(provider => (
            <Link
              to={`/c/appointments/create/${provider.id}`}
              key={provider.id}
            >
              <BoxProvider>
                <Avatar size={55} img={provider.avatar_url} />
                <div className="info">
                  <h3>{provider.name}</h3>
                  <span>
                    <MdEvent size={16} color="#009FD9" />
                    Segunda à sexta
                  </span>
                  <span>
                    <MdSchedule size={16} color="#009FD9" />
                    8h às 18h
                  </span>
                </div>
              </BoxProvider>
            </Link>
          ))}
      </Content>
      <Footer />
    </Container>
  );
};

export default SelectProvider;
