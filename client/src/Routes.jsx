import Register from './Register';
import {useContext} from 'react';
import {UserContext} from './UserContext';

function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return 'Logged in!';
  }
  return (
    <Register />
  );
}

export default Routes;