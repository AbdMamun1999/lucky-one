import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Answer from './Components/QuestionAnswer/Answer';

function App() {
  return (
    <div className="App">
      <Header
        name={'Laptop Dokan'}
      ></Header>
      <Products></Products>
      <Answer></Answer>
    </div>
  );
}

export default App;
