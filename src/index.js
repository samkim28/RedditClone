import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import AppHeader from './AppHeader';
import App from './App';
import CommentPage from './CommentPage';


var Root = () => {
  //indexroute that goes to front page
  return (
    <Router history={browserHistory}>
      <Route path={'/'} component={AppHeader} > 
        <IndexRoute component={App}> </IndexRoute> 
        <Route path={'/r/:subreddit(/:order)'} component={App}> </Route>
        <Route path={'/:order'} component={App}> </Route>
      </Route>
      <Route path={'/r/:subreddit/comments/:id(/:title)'} component={CommentPage} />
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
