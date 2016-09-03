import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import CommentPage from './CommentPage';
var Root = () => {
  return (
    <Router history={browserHistory} > 
      <Route path={'/'} component={App} />
      <Route path={'/r/:subreddit/comments/:id(/:title)'} component={CommentPage} />
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
