import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Comments from './Comments';
var Root = () => {
  return (
    <Router history={browserHistory} > 
      <Route path={'/'} component={App} />
      <Route path={'/r/:subreddit/comments/:id(/:title)'} component={Comments} />
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
