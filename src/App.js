import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { CountrySearch } from './components/CountrySearch';

function App() {
  return (
   <div>
    <Navbar/>
    <CountrySearch/>
   </div>
  );
}

export default App;
