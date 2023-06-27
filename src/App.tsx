import './App.css';
// import { List } from './components/generics/List';
import { RandomNumber } from './components/restrictions/RandomNumber';

function App() {
  return (
    <div className="App">
      {/* <List items={['Batman', 'Superman', 'Dead Pool']} onClick={(item) => console.log(item)}/>
      <List items={[1,2,3]} onClick={(item) => console.log(item)}/> */}
      {/* <List items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne'
        },
        {
          id: 2,
          first: 'Tony',
          last: 'Stark'
        },
        {
          id: 3,
          first: 'Sheldon',
          last: 'Cooper'
        },
        
      ]} onClick={(item) => console.log(item)}/> */}
    <RandomNumber value={20} isPositive={true} />
    </div>
  );
}

export default App;
