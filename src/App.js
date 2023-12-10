import logo from './logo.svg';
import './App.css';
import Display from './Display'
import { Provider } from 'react-redux';
import store from './Store';
import AddUserForm from './AddUser';
import Update from './Update'
import Edit from './Edit'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Display/>
      <AddUserForm/>
      <Update/>
      <Edit/>
    </div>
    </Provider>
  );
}


export default App;
