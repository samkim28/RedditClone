//only difference between this and frontapp is the /r/subreddit link for the ordering

import React, {Component} from 'react';
import Entry from './Entry';
import {Link, IndexLink} from 'react-router';
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
    var myRequest = new Request (`https://www.reddit.com${location.pathname}.json${location.search}`);
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
      var myRequest = new Request (`https://www.reddit.com${location.pathname}.json${location.search}`);
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
    var startCount;
    //determine the post numberings
    if(this.props.location.query.before) {
      startCount = Number(count)-25;
    }
    else {
      startCount = Number(count)+1;
    }
    //prev/next button styling
    var buttons = {background:'#eee', border: '1px solid #ddd', borderRadius: '3px', padding:'1px 4px', fontWeight:'bold'};
    
    if(this.state.posts) {
      var arr = this.state.posts.map((curr, i)=>{
        return (
          <Entry key = {curr.data.id} count={startCount+i} countSize={(startCount+24).toString().length} data = {curr.data}> </Entry>
        );
      })
      if(this.state.beforeID===null) {
        return (
          <div> 
            <div className='blueheader'> 
              <a href="/" id="header-img"></a>
              &nbsp;
              <ul className='tabmenu'> 
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/`}} activeClassName='activeOrder'>hot</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/new/`}} activeClassName='activeOrder'>new</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/rising/`}} activeClassName='activeOrder'>rising</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/controversial/`}} activeClassName='activeOrder'>controversial</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/top/`}} activeClassName='activeOrder'>top</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/gilded/`}} activeClassName='activeOrder'>gilded</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/wiki/`}} activeClassName='activeOrder'>wiki</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/promoted/`}} activeClassName='activeOrder'>promoted</Link></li>
              </ul>
            </div>
            <div>
            </div>
            <UserForm newUser={this.state.newUser} onFormChange={this.onFormChange} submitNewUser={this.submitNewUser}/>
            {arr}
            <span style={{color:'gray', fontSize: 'larger', marginLeft: '5px'}}>
              view more: <a style={buttons} href={`${location.pathname}?count=${countOnAfterClick}&after=${this.state.afterID}`}>next ›</a>
            </span>
            <div style={{height:'50px'}}> </div>
          </div>
        )     
      }
      return (
          <div> 
            <div className='blueheader'> 
              <a href="/" id="header-img"></a>
              &nbsp;
              <ul className='tabmenu'> 
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/`}} activeClassName='activeOrder'>hot</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/new/`}} activeClassName='activeOrder'>new</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/rising/`}} activeClassName='activeOrder'>rising</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/controversial/`}} activeClassName='activeOrder'>controversial</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/top/`}} activeClassName='activeOrder'>top</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/gilded/`}} activeClassName='activeOrder'>gilded</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/wiki/`}} activeClassName='activeOrder'>wiki</Link></li>
                <li><Link to={{pathname:`/r/${this.props.params.subreddit}/promoted/`}} activeClassName='activeOrder'>promoted</Link></li>
              </ul>
            </div>
            <div>
            </div>
            <UserForm newUser={this.state.newUser} onFormChange={this.onFormChange} submitNewUser={this.submitNewUser}/>
            {arr}
            <span style={{color:'gray', fontSize: 'larger', marginLeft: '5px'}}>
              view more: <a style={buttons} href={`${location.pathname}?count=${countOnBeforeClick}&before=${this.state.beforeID}`}>‹ prev</a>
              <span style={{paddingLeft: '.5em', marginLeft: '.5em', borderLeft: '1px solid #ccc'}}></span>
              <a style={buttons} href={`${location.pathname}?count=${countOnAfterClick}&after=${this.state.afterID}`}>next ›</a>
            </span>
            <div style={{height:'50px'}}> </div>
          </div>
        )
    }
    return (
      <div>waiting</div>
    )
  }

}

export default App;

