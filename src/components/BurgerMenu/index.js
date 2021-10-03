// import { useSelector } from 'react-redux';
import { AiOutlineLogout, AiOutlineHome, AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { BurgerMenu as Menu } from './styled';

export default function BurgerMenu() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Menu right>
      <div>
        <AiOutlineHome />
        <Link className="menu-item" to="/">
          Home
        </Link>
      </div>
      <div>
        <AiOutlineEdit />
        <Link className="menu-item" to="/register">
          Editar
        </Link>
      </div>
      <div>
        <AiOutlineLogout />
        <Link className="menu-item" onClick={handleLogout} to="/logout">
          Sair
        </Link>
      </div>
    </Menu>
  );
}
