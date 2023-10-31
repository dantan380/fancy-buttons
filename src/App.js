import './App.css';
import AngryButton from './components/fancy-buttons/AngryButton';
import CounterButton from './components/fancy-buttons/CounterButton';
import LightSwitchButton from './components/fancy-buttons/LightSwitchButton';
import TextRepeaterButton from './components/fancy-buttons/TextRepeaterButton';

function App() {
  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
