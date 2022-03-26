import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header
        name={'Laptop Dokan'}
      ></Header>
      <Products></Products>
    </div>
  );
}

export default App;
