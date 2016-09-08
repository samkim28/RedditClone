import React, {Component} from 'react';
import Comment from './Comment';

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      comments: null,
      header: null
    };
  }

  componentDidMount() {
    var myRequest = new Request(`https://www.reddit.com${this.props.location.pathname}.json`)
    fetch(myRequest).then(function(response) {
      console.log('response from api call', response);
      return response.json();
    }).then(function(json){
      console.log('the json response from api call', json[1].data.children);
      this.setState({comments:json[1].data.children, header: json[0].data.children[0].data})
    }.bind(this)) 
  }

  render() {
  
    if(this.state.comments) {
      var {header}=this.state;
      var filteredComments = this.state.comments.filter((curr)=>curr.kind!=='more');
      var replies = filteredComments.map((reply)=>{
        return(
          <Comment key={reply.data.id} data={reply.data}></Comment>
        );
      })
      //i don't think i need to check header in state
      return (
        <div>
          <div> {header.title} {header.author} {header.upvote_ratio} </div>
          <textarea rows="1" cols="1" className = 'commentBox' ></textarea>
          <div> {replies} </div>
        </div>
      )
    }
    return (
      <div>Hi Rong</div>
    )
  }
}

export default CommentPage;