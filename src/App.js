import React, {Component} from 'react';
import Entry from './Entry';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: null};
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
    if(this.props.params.subreddit !== prevProps.params.subreddit) {
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

  render(){ 
    console.log(this.props.location)
    var path = `/r/${this.props.params.subreddit}/`;
    var count = this.props.location.query.count || 0;
    //var before = this.props.location.query.before || null;
    var countOnAfterClick;
    var countOnBeforeClick; 
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
            {arr}
            <a href={`${location.pathname}?count=${countOnAfterClick}&after=${this.state.afterID}`}> next</a>
          </div>
        )    
      }
      return (
          <div> 
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

