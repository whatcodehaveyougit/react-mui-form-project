import './App.css';
import Header from './components/header/header'
import Form from './components/form/form'
import theme from './mui-theme'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header title="Compte-Rendu d'Intervention" />
        <Form />
      </div>
    </ThemeProvider>

  );
}

export default App;