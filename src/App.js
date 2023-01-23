import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from "./redux/store"
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <p>This is Hooks Cake container</p>
        <HooksCakeContainer/>

        <p>This is connect function</p>
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
