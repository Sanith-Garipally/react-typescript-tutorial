// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import { Heading } from './components/Heading';
// import Oscar from './components/Oscar';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
import { Container } from './components/Container';
import './App.css';

// Basic Props Types
// function App() {
//   const personName = {
//     first: 'Bruce',
//     last: 'Wayne'
//   }

//   const nameList = [
//     {
//       first: 'Tony',
//       last: 'Stark'
//     },
//     {
//       first: 'Princess',
//       last: 'Diana'
//     },
//     {
//       first: 'Ajay',
//       last: 'Kodipyaka'
//     },
//   ]

//   return (
//     <div className="App">
//       <Greet name="sanith" msgCount={20} isLoggedIn={true}/>
//       <Person name={personName}/>
//       <PersonList names={nameList}/>
//     </div>
//   );
// }

// Advanced Props Types 
// function App() {
//   return (
//     <div className="App">
//       <Status status="success"/>
//       <Heading>Placeholder text</Heading>
//       <Oscar>
//         <Heading>
//           Oscar goes to Leonardo Dicaprio!
//         </Heading>
//       </Oscar>
//       <Greet name='Sanith' msgCount={10} isLoggedIn={true}/>
//     </div>
//   );
// }

// event handling types
// function App() {
//   return (
//     <div className="App">
//       <Button handleClick={(event, id) => console.log('button clicked', event, id)}/>
//       <Input value='' handleChange={(event) => console.log(event.target.value)}/>
//     </div>
//   );
// }

// style Type props
function App() {
  return (
    <div className="App">
      <Container styles={{ border: '1px solid black', padding: '1em' }}/>
    </div>
  );
}


export default App;