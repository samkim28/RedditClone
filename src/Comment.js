import React, {Component} from 'react';
// import marked from 'marked';
import Markdown from './Markdown';

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
    //decoding the url entities in case there are any
    var elem = document.createElement('textarea');
    elem.innerHTML = this.props.data.body;
    var body = elem.value;
    console.log(this.props.data.body, body);

    //props.data contains info for the current comment
    if(this.props.data.replies) {
      var numChildren = this.getNumChildren(this.props.data.replies.data.children);
      var filteredChildren = this.props.data.replies.data.children.filter((curr)=>curr.kind!=='more')
      var replies = filteredChildren.map((reply)=>{
        return (
          <Comment key={reply.data.id} data={reply.data}> </Comment> 
        )
      }) 
      return(
        <div > 
          <div className={this.state.hidden?'hiddenCommentHeader':'visibleCommentHeader'} onClick={(e)=>{this.onClick(); e.stopPropagation();}  } >{this.state.hidden?'[+]':'[--]'} {this.props.data.author} children:{numChildren}</div>
          <div className={this.state.hidden?'hiddenCommentBody':'visibleCommentBody'}>
            <Markdown source ={body}/>
            {replies}
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className={this.state.hidden?'hiddenCommentHeader':'visibleCommentHeader'}  onClick={(e)=>{this.onClick(); e.stopPropagation();}} >{this.state.hidden?'[+]':'[--]'} {this.props.data.author} </div>
        <div className={this.state.hidden?'hiddenCommentBody':'visibleCommentBody'}> 
          <Markdown source ={body}/> 
        </div>
      </div>
    ) 
  }
}
export default Comment;