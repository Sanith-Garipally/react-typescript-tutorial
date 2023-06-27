import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext)

  const handleLogin = () => {
    userContext.setUser({
        name: 'sanith',
        email: 'sanith@gmail.com'
    })
  };
  const handleLogout = () => {
      userContext.setUser(null)
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>{
        userContext.user && `User name is ${userContext.user?.name}: User email is ${userContext.user?.email} `
        }</div>
    </div>
  );
};
