import logo from './logo.svg';
import './App.css';
//import { TestButton } from './components/Buttons/TestButton.jsx';
import styled from 'styled-components';

const Button = styled.button`
  background-color: yellow;
  font-size: 2rem;
  font-weight: bold;
  background-color: white;
  width:450px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: teal;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button >first time boss</Button>
      </header>
    </div>
  );
}

export default App;