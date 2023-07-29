import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/profile');
      setId(response.data.userId);
      setUsername(response.data.username);
    }
    fetchData();
  }, [])
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}