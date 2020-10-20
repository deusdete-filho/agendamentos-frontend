import React, { useState, useContext } from 'react';
import { MdEmail, MdLock, MdLastPage } from 'react-icons/md';
import { Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface Values {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('E-mail deve ser válido'),
});

const ForgotPassword: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: Values) {
    try {
      setLoading(true);
      const { email } = values;

      await api.post('/passwords/forgot', { email });
      toast.success('Email de recuperação enviado');
    } catch (err) {
      const error = err.response.data.message;
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <h3>Resentar Senha</h3>

              <label htmlFor="email">Email</label>
              <Input
                id="email"
                icon={MdEmail}
                name="email"
                placeholder="exemple@gmail.com"
              />

              <Button width={340} loading={loading} type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </Formik>

        <Link to="/">
          <MdLastPage color="#009FD9" size={16} />
          Login
        </Link>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
