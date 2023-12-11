import logo from './logo.svg';
import './App.css';
import Add from './components/Add'
import {store} from './store/Store'
import { Provider } from 'react-redux';
import Disp from './components/Disp'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      {/* <Add/> */}
      <Disp/>
    </div>
    </Provider>
  );
}


export default App;
