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

  getNumChildren(children) {
    var numChildren = 0;
    for(var i=0; i<children.length; i++) {
      numChildren++;
      if(children[i].data.replies) {
        numChildren+=this.getNumChildren(children[i].data.replies.data.children);
      }
    }
    return numChildren;
  }

  render() {
    var headStyle = {
      padding: '0px 0px 0px 20px',
      //fontStyle: this.state.hidden ? 'italic':'normal',
      color: this.state.hidden? 'green':'black'
    }
    var bodyStyle = {
      padding: '0px 0px 0px 20px',
      display: this.state.hidden ? 'none':'block'

    };

    //props.data contains info for the current comment
    if(this.props.data.replies) {
      var numChildren = this.getNumChildren(this.props.data.replies.data.children);
      var replies = this.props.data.replies.data.children.map((reply)=>{
        return (
          <Comment key={reply.data.id} data={reply.data}> </Comment> 
        )
      })
      return(
        <div > 
          <div style={headStyle} onClick={(e)=>{this.onClick(); e.stopPropagation();}  } >{this.state.hidden?'[+]':'[-]'} {this.props.data.author} children:{numChildren}</div>
          <div style={bodyStyle}>
            <div>{this.props.data.body} </div>
            {replies}
          </div>
        </div>
      )
    }
    return (
      <div>
        <div style={headStyle} onClick={(e)=>{this.onClick(); e.stopPropagation();}} >{this.state.hidden?'[+]':'[-]'} {this.props.data.author} </div>
        <div style={bodyStyle}> {this.props.data.body} </div>
      </div>
    ) 
  }
}
export default Comment;