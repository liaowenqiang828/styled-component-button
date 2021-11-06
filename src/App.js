import './App.css';
import MyButton from './components/MyButton';
import {ThemeProvider} from 'styled-components';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyButton variant="outline"/>
      <div className="App">
      <h2>My button components</h2>
      <div className='btn-row'>
        <MyButton variant="outline"/>
      </div>
      <div className='btn-row'>
        <MyButton variant="text"/>
      </div>
      <div className='btn-row'>
        <MyButton disabled/>
        <MyButton />
      </div>
      <div className='btn-row'>
        <MyButton size="sm"/>
        <MyButton size="md"/>
        <MyButton size="lg"/>
      </div>
      <div className='btn-row'>
        <MyButton color="default"/>
        <MyButton color="primary"/>
        <MyButton color="secondary"/>
        <MyButton color="danger"/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
