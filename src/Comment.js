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
        <div style={{marginLeft: '10px'}} > 
          <div style={this.state.hidden?{display:'none'} : {}} className='commentvote'>
            <div className='commentarrow up'> </div>
            <div className='commentarrow down'> </div>
          </div>
          <div className={this.state.hidden?'hiddenCommentHeader':'visibleCommentHeader'} onClick={(e)=>{this.onClick(); e.stopPropagation();}}> <span className='plus'>[+]</span><span className='minus'>[–]</span><span className='author'>{this.props.data.author}</span> <span className='children'>children:{numChildren}</span></div>
          <div className={this.state.hidden?'hiddenCommentBody':'visibleCommentBody'}>
            {/* in markdown i passed className props*/}
            <Markdown style = {{marginTop:'5px', marginBottom:'5px', fontSize:'1.076923em', lineHeight:'1.4285em'}} source ={body}/>
          </div>
          <div className={this.state.hidden?'hiddenCommentReplies':'visibleCommentReplies'}>
            {replies}
          </div>
          <div style={{clear: 'left'}}> </div>
        </div>
      )
    }
    // return (
    //   <div>
    //     <div className={this.state.hidden?'hiddenCommentHeader':'visibleCommentHeader'}  onClick={(e)=>{this.onClick(); e.stopPropagation();}} >{this.state.hidden?'[+]':'[--]'} {this.props.data.author} </div>
    //     <div className={this.state.hidden?'hiddenCommentBody':'visibleCommentBody'}> 
    //       <Markdown source ={body}/> 
    //     </div>
    //   </div>
    // ) 
    return(
      <div style={{marginLeft: '10px'}} > 
        <div style={this.state.hidden?{display:'none'} : {}} className='commentvote'>
          <div className='commentarrow up'> </div>
          <div className='commentarrow down'> </div>
        </div>
        <div className={this.state.hidden?'hiddenCommentHeader':'visibleCommentHeader'} onClick={(e)=>{this.onClick(); e.stopPropagation();}}> <span className='plus'>[+]</span><span className='minus'>[–]</span><span className='author'>{this.props.data.author}</span> <span className='children'>children:{numChildren}</span></div>
        <div className={this.state.hidden?'hiddenCommentBody':'visibleCommentBody'}>
          {/* in markdown i passed className props*/}
          <Markdown style = {{marginTop:'5px', marginBottom:'5px', fontSize:'1.076923em', lineHeight:'1.4285em'}} source ={body}/>
        </div>
        <div style={{clear: 'left'}}> </div>
      </div>
    )

  }
}
export default Comment;