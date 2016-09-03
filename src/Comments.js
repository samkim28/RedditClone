import React, {Component} from 'react';
import CommentEntry from './CommentEntry';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state={comments: null};
  }

  componentDidMount() {
    var myRequest = new Request(`https://www.reddit.com/r/television/comments/50uwdr.json`);

    fetch(myRequest).then(function(response) {
      console.log('response from api call', response);
      return response.json();
    }).then(function(json){
      console.log('the json response from api call', json[1].data.children);
      this.setState({comments:json[1].data.children})
    }.bind(this)) 
  }
  render() {
    if(this.state.comments) {
      var arr = this.state.comments.map((curr)=>{
        return(
          <CommentEntry key={curr.data.id} dog={curr.data.body}></CommentEntry>
        );
      })
      return (
        <div> {arr} </div>
      )
    }
    return (
      <div></div>
    )
  }
}

export default Comments;