import React, {Component} from 'react';

var Comments = (props) => {
  console.log(props.location);
  return (
    <div> {props.location.pathname} </div>
  )
}

export default Comments;