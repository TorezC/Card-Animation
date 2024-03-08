import './App.css';
import Screens from './components/Screens/Screens';
import ScreenTwo from './components/screenTwo/ScreenTwo';

function App() {
  return (
    <div className="App">
      <Screens ScreenName={'Screen One'}/>
      <ScreenTwo />
      <Screens ScreenName={'Screen Three'} id='bottom' />
    </div>
  );
}

export default App;
