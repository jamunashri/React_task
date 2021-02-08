import './App.css';
import Checkout from './Component/Checkout';
import Cart from './Component/Cart'
import './asset/custom.css'
import { Route, Switch, Redirect } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route path={'/'} exact component={() => <Redirect to={'/checkout'} />}></Route>
      <Route path={'/checkout'} component={Checkout} />
      <Route path='/cart' exact component={Cart} />
    </Switch>
  );
}

export default App;
