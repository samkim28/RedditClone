import React, {Component} from 'react';
import {Link} from 'react-router';

var AppHeader = (props)=>{

  return(
    <div>
      <Link to={{pathname:'/r/AskReddit'}}> AskReddit </Link>
      <Link to={{pathname:'/r/Funny'}}> Funny </Link>
      <Link to={{pathname:'/r/Vidoes'}}> Videos </Link>
      <Link to={{pathname:'/r/WorldNews'}}> WorldNews </Link>
      <Link to={{pathname:'/r/TodayILearned'}}> TodayILearned </Link>
      <Link to={{pathname:'/r/Pics'}}> Pics </Link>
      <Link to={{pathname:'/r/Gifs'}}> Gifs </Link>
      <Link to={{pathname:'/r/News'}}> News </Link>

      {props.children}
    </div>
  )


}

export default AppHeader;