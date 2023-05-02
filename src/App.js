
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return ( 
  <div className="App" >
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos'} />
    <ItemCount initial ={1} stock={10} onAdd = {(quantity) => console.log ('cantidad agregada ',quantity)} />
    <ItemDetailContainer/>
  </div>
    
  );
}

export default App;

