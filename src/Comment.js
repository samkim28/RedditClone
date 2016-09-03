import React, {Component} from 'react';

var Comment=(props)=> {

  var commentStyle = {
    padding: 10
  }
  //props.data contains info for the current comment
  if(props.data.replies) {
    var replies = props.data.replies.data.children.map((reply)=>{
      return (
        <Comment key={reply.data.id} data={reply.data}> </Comment> 
      )
    })
    return(
      <div> 
        <div >{props.data.body} </div>
        {replies}
      </div>

    )
  }
  return (
    <div> {props.data.body} </div>
  )
}


export default Comment;