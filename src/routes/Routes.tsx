import { createBrowserHistory } from 'history';
import { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import PageLoader from '../components/loaders/PageLoader';
const LiveHome = lazy(() => import('../pages/live-home'));
const MyLessons = lazy(() => import('../pages/my-lessons'));

const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={<PageLoader />}>
          <Route exact path="/" component={LiveHome} />
          <Route exact path="/my-lessons" component={MyLessons} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
