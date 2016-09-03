import React, {Component} from 'react';

class Comment extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hidden:false
    };

    this.onClick = this.onClick.bind(this);
  };

  onClick() {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    var commentStyle = {
      padding: 10
    };
    if(this.state.hidden) {
      return (
        <div style={commentStyle} onClick={(e)=>{this.onClick(); e.stopPropagation();}}> closed </div>
      )
    }
    //props.data contains info for the current comment
    if(this.props.data.replies) {
      var replies = this.props.data.replies.data.children.map((reply)=>{
        return (
          <Comment key={reply.data.id} data={reply.data}> </Comment> 
        )
      })
      return(
        <div style={commentStyle} onClick={(e)=>{this.onClick(); e.stopPropagation();}}> 
          <div>{this.props.data.body} </div>
          {replies}
        </div>
      )
    }
    return (
      <div style={commentStyle} onClick={(e)=>{this.onClick(); e.stopPropagation();}}> {this.props.data.body} </div>
    ) 
  }
}
export default Comment;