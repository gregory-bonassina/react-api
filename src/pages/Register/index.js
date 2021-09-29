import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { CenteredDiv, Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import Svg from '../../assets/svg/codding.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStorage = useSelector((state) => state.auth.user.nome);
  const emailStorage = useSelector((state) => state.auth.user.email);

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;

    setNome(nomeStorage);
    setEmail(emailStorage);
  }, [emailStorage, id, nomeStorage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
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
          <Form onSubmit={handleSubmit}>
            <h1 style={{ color: '#fff' }}>
              {id ? 'Editar dados' : 'Crie sua conta'}
            </h1>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
            />

            <input
              type="email"
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

            <button type="submit">{id ? 'Salvar' : 'CADASTRAR'}</button>
          </Form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: '100%',
              maxWidth: '480px',
              paddingLeft: '20px',
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
              }}
            >
              Cadastre sua conta e faça parte da comunidade
            </h1>
            <Link to="/">
              <img
                src={LeftArrow}
                alt="Logo"
                style={{
                  width: '12px',
                  marginTop: '10px',
                  marginRight: '20px',
                }}
              />
              Voltar para login
            </Link>
          </div>
        </CenteredDiv>
      </Container>
    </motion.div>
  );
}
