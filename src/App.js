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
      this.setState({posts:json.data.children, afterID:json.data.children[24].data.name, beforeID:json.data.children[0].data.name});
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
        this.setState({posts:json.data.children, afterID:json.data.children[24].data.name, beforeID:json.data.children[0].data.name});
      }.bind(this))
    }
  }

  render(){ 
    console.log(this.props.location)
    var path = `/r/${this.props.params.subreddit}/`;

    if(this.state.posts) {
      var arr = this.state.posts.map((curr, i)=>{
        return (
          <Entry key = {curr.data.id} data = {curr.data}> </Entry>
        );
      })
      return (
        <div> 
          {arr}
          <a href={`${location.pathname}?count=25&before=${this.state.beforeID}`}> prev</a>
          <a href={`${location.pathname}?count=25&after=${this.state.afterID}`}> next</a>
        </div>
      )
    }
    return (
      <div>waiting</div>
    )
  }

}

export default App;

