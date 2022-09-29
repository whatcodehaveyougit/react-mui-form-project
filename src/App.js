import './App.css';
import Header from './components/header/header'
import Form from './components/form/form'
import theme from './mui-theme'
import { ThemeProvider } from '@mui/material/styles';

import { styled } from '@mui/system';


const AppWrapper = styled('div')({
  marginTop: '40px',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper className="App">
        <Header title="Compte-Rendu d'Intervention" />
        <Form />
      </AppWrapper>
    </ThemeProvider>

  );
}

export default App;
