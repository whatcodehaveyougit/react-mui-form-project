import './App.css';
import Header from './components/header/header'
import Form from './components/form/form'

function App() {
  return (

      <div className='App'>
        <Header title="Compte-Rendu d'Intervention" />
        <div className="container">
          <Form />
        </div>
      </div>

  );
}

export default App;
