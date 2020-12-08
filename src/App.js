import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'

function App() {
  const doThis = ["Yard Work", "Dishes", "Feed the pets"]
  return (
    <div>
      <header>My List</header>
      <div>
        <ul>
          <ListItem list={doThis[0]}/>
          <ListItem list={doThis[1]}/>
          <ListItem list={doThis[2]}/>
        </ul>
      </div>
    </div>
  );
}

export default App;
