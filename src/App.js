import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TestPage from './TestPage';

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <Switch>
          <Route path="/test" render={() => <TestPage />} />
          <Route path="/test2" render={() => <>Test2</>} />
          <Route path="/test3" render={() => <>Test3</>} />
          <Route path="/test4" render={() => <>Test4</>} />
          <Route path="/*" render={() => <>Not Found</>} />
        </Switch>
      </Dashboard>
    </BrowserRouter>
  );
}

export default App;
