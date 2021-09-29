import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { Container, CenteredDiv } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';
import Svg from '../../assets/svg/codding.svg';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Loading isLoading={isLoading} />
        <CenteredDiv>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: '100%',
              maxWidth: '480px',
            }}
          >
            <img
              src={Svg}
              alt="Logo"
              style={{ width: '70px', marginBottom: '60px' }}
            />
            <h1
              style={{
                maxWidth: '480px',
                width: '480px',
                height: '100%',
                color: '#fff',
                fontSize: '54px',
                lineHeight: '64px',
                marginBottom: '10px',
              }}
            >
              Faça seu login na plataforma
            </h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />

            <button type="submit">ENTRAR</button>
            <div
              style={{
                color: '#fff',
                marginTop: '24px',
                fontSize: '14px',
                textAlign: 'center',
              }}
            >
              Não tem uma conta?
              <Link to="/register/"> Registre-se</Link>
            </div>
          </Form>
        </CenteredDiv>
      </Container>
    </motion.div>
  );
}
