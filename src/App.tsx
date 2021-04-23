import React from 'react';
// @ts-ignore
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store  from 'store'
import { Home } from 'components/home'
import { Header, Footer} from 'components/shared'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="siteWrapper">
          <Header />
          <div className="main-wrapper">
            <Provider store={store()}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route render={() => <Redirect to={{pathname: "/"}} />} />
              </Switch>
            </Provider>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
