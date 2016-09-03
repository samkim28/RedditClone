import React, {Component} from 'react';
import Entry from './Entry';


var renderCount = 0;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: null};
  }

  componentDidMount() {
    var myRequest = new Request ('https://www.reddit.com/r/all.json?obey_over18=true');
    fetch(myRequest).then(function(response) {
      console.log('response from api call', response);
      return response.json();
    }).then(function(json) {
      console.log('the json response from api call', json.data);
      this.setState({posts:json.data.children});
    }.bind(this))
  }

  render(){ 
    renderCount++;
    if(this.state.posts) {
      var arr = this.state.posts.map((curr, i)=>{
        return (
          <Entry key = {curr.data.id} data = {curr.data}> </Entry>
        );
      })
      return (
        <div> 
          {renderCount}
          {arr}
        </div>
      )
    }
    return (
      <div>waiting</div>
    )
  }

}

export default App;

