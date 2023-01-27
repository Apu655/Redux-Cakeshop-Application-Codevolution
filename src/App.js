import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from "./redux/store"
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import IceCreamContainer from './components/IceCreamContainer';
// import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <p>This is Hooks Cake container</p>
         <HooksCakeContainer/>

        {/* <p>This is connect function</p>
        <CakeContainer/> */}
        <HooksIceCreamContainer/>

        {/* <IceCreamContainer/> */}

        
      </div>
    </Provider>
  );
}

export default App;
