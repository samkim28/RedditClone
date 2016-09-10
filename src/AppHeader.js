import React, {Component} from 'react';
import {Link} from 'react-router';

var AppHeader = (props)=>{

  return(
    <div>
      <Link to={{pathname:'/r/AskReddit'}}> AskReddit </Link>
      {props.children}
    </div>
  )


}

export default AppHeader;