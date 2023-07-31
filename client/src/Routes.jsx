import Register from './RegisterAndLoginForm';
import {useContext} from 'react';
import {UserContext} from './UserContext';

function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return 'Logged in!' + username;
  }
  return (
    <Register />
  );
}

export default Routes;