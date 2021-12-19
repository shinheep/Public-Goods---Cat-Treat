import './App.css';
import Main from './components/Main';
import Membership from './components/Membership';
import Treat from './components/Treat';
import ResponsiveAppBar from './components/Nav';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>

      <Main/>
      <Treat/>
      <Membership/>

    </div>
  );
}

export default App;
