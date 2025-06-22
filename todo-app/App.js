
import store from './Redux/Store';
import Route from './routes/Route';
import { Provider } from 'react-redux';

export default function App() {

  return (
    
    <Provider store={store}>
      <Route />
    </Provider>
    
  );
}