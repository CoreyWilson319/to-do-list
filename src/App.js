import logo from './logo.svg';
import './App.css';
import './ListItem.css';
import ListItem from './components/ListItem'

function App() {
  const list = ["Yard Work", "Dishes", "Feed the pets"]
  let todos = list.map((todo, index) => {
    return <ListItem list={todo} key={`list-item-${index}`} />
  })
  return (
    <div className="body">
      <header className="title">My List</header>
      <div>
        <ul className="list">
          {todos}
        </ul>
      </div>
    </div>
  );
}

export default App;
