import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userEmail = useSelector((state) => state.auth.user.email);

  return (
    <Nav>
      {isLoggedIn && (
        <div
          style={{
            color: '#fff',
            display: 'flex',
            justifyContent: 'right',
            marginRight: '80px',
          }}
        >
          {userEmail}
        </div>
      )}
    </Nav>
  );
}
