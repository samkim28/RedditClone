import React, {Component} from 'react';
import Entry from './Entry';
import {Link} from 'react-router';
import UserForm from './UserForm';

var userTemplate = {name: "", email: "", description: "", errors: {}};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: null, newUser: userTemplate};
    this.onFormChange = this.onFormChange.bind(this);
    this.submitNewUser = this.submitNewUser.bind(this);

  }

  componentDidMount() {
    var {location} = this.props;
    var myRequest = new Request (`https://www.reddit.com${location.pathname}/.json${location.search}`);
    fetch(myRequest).then(function(response) {
      console.log('response from api call', response);
      return response.json();
    }).then(function(json) {
      console.log('the json response from api call', json.data);
      this.setState({posts:json.data.children, afterID:json.data.after, beforeID:json.data.before});
    }.bind(this))
  }

  componentDidUpdate(prevProps) {
    //if(this.props.params.subreddit !== prevProps.params.subreddit || this.props.params.order !== prevProps.params.order) {
    if(this.props.location.pathname !== prevProps.location.pathname || this.props.location.search !== prevProps.location.search) {
      var {location} = this.props;
      var myRequest = new Request (`https://www.reddit.com${location.pathname}/.json${location.search}`);
      fetch(myRequest).then(function(response) {
        console.log('response from api call', response);
        return response.json();
      }).then(function(json) {
        console.log('the json response from api call', json.data);
        this.setState({posts:json.data.children, afterID:json.data.after, beforeID:json.data.before});
      }.bind(this))
    }
  }

  onFormChange(value) {
    this.setState({newUser:value})
  }

  submitNewUser(user) {
    var userCopy = {...user, errors:{}};
    if(!userCopy.name) {
      userCopy.errors.name='put name';
    }
    if (!/.+@.+\..+/.test(user.email)) {
      userCopy.errors.email = "Please enter your new user's email";
    }
    if(Object.keys(userCopy.errors).length===0) {
      this.setState({newUser:userTemplate })
    }
    else {
      this.setState({newUser:userCopy})
    }
  }

  render(){ 
    // var subreddit = this.props.params.subreddit || '';
    console.log(this.props.location)
    // var path = `/r/${this.props.params.subreddit}/`;
    var count = this.props.location.query.count || 0;
    //var before = this.props.location.query.before || null;
    var countOnAfterClick;
    var countOnBeforeClick; 

    //we use count and before/after as different states.
    //the clicks on prev/next depends on the states before/after
    if(this.props.location.query.before){
      countOnBeforeClick = Number(count)-25;
      countOnAfterClick = Number(count)-1;
    }
    else {
      countOnBeforeClick = Number(count)+1;
      countOnAfterClick = Number(count)+25;
    }
    
    if(this.state.posts) {
      var arr = this.state.posts.map((curr, i)=>{
        return (
          <Entry key = {curr.data.id} data = {curr.data}> </Entry>
        );
      })
      if(this.state.beforeID===null) {
        return (
          <div> 
            <div>
              <Link to={{pathname:`/r/${this.props.params.subreddit}/new`}}> new </Link>
              <Link to={{pathname:`/r/${this.props.params.subreddit}/rising`}}> rising </Link>
              <Link to={{pathname:`/r/${this.props.params.subreddit}/controversial`}}> controversial </Link>
              <Link to={{pathname:`/r/${this.props.params.subreddit}/top`}}> top </Link>
            </div>
            <UserForm newUser={this.state.newUser} onFormChange={this.onFormChange} submitNewUser={this.submitNewUser}/>
            {arr}
            <a href={`${location.pathname}?count=${countOnAfterClick}&after=${this.state.afterID}`}> next</a>

          </div>
        )    
      }
      return (
          <div> 
            <Link to={{pathname:`/r/${this.props.params.subreddit}/new`}}> new </Link>
            <Link to={{pathname:`/r/${this.props.params.subreddit}/rising`}}> rising </Link>
            <Link to={{pathname:`/r/${this.props.params.subreddit}/controversial`}}> controversial </Link>
            <Link to={{pathname:`/r/${this.props.params.subreddit}/top`}}> top </Link>
            {arr}
            <a href={`${location.pathname}?count=${countOnBeforeClick}&before=${this.state.beforeID}`}> prev</a>
            <a href={`${location.pathname}?count=${countOnAfterClick}&after=${this.state.afterID}`}> next</a>
          </div>
        )
    }
    return (
      <div>waiting</div>
    )
  }

}

export default App;

