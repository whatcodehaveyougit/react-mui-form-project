import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header'
import Form from './routes/interventionForm/interventionForm'
import FormSubmitted from './routes/form-submitted/form-submitted';

function App() {
  return (

      <div className='App'>
        <Header title="Compte-Rendu d'Intervention" />
        <div className="container">
          <Routes>
            <Route path="/form" element={<Form/>} />
            <Route path="/form/:clientName" element={<Form/>} />

            <Route path="/form-submitted" element={<FormSubmitted/>} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
