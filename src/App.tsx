// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ThemeContextProvider>
//         <Box />
//       </ThemeContextProvider>
//     </div>
//   );
// }

// useContext with future value/ if value not known at the movement
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
