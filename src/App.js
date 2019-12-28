import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';

import BaseLayout from './components/BaseLayout';
import DetailSurah from './pages/DetailSurah';

import API from './helpers/index';

function App() {
  const [state, setState] = React.useState({
    loading: false,
    error: false,
    surahs: [],
  });

  React.useEffect(() => {
    setState({ ...state, loading: true });

    API.getSurahs()
      .then(surahs => setState({ ...state, surahs, loading: false }))
      .catch(err => {
        console.error("error while getting surahs: ", err)
        setState({ ...state, error: true, surahs: [], loading: false })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BaseLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home loading={state.loading} surahs={state.surahs} />
          </Route>
          <Route path="/detail/:number">
            <DetailSurah />
          </Route>
        </Switch>
      </Router>
    </BaseLayout>
  );
}

export default App;
