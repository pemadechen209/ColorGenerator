import './App.css';
import InternalComponent from './component/Internal-Component/Internal-Component';
import Random from './component/Random/Random';
function App() {

  return (
    <div className="App">
      <Random component={InternalComponent} Element="button" text="Click Me"></Random>
    </div>
  );
}

export default App;
