import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import AppHeader from './AppHeader';
import App from './App';
import CommentPage from './CommentPage';


var Root = () => {
  //indexroute that goes to front page
  return (
    <Router history={browserHistory}>
      <Route path={'/'} component={AppHeader} > 
        <Route path={'/r/:subreddit'} component={App}>  </Route>
      </Route>
      <Route path={'/r/:subreddit/comments/:id(/:title)'} component={CommentPage} />
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
