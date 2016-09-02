import React, {Component} from 'react';
import {Link} from 'react-router';

var Entry = (props) => {
  if(props.data.domain.slice(0,4) === 'self') {
    var fiftyChars = props.data.title.slice(0,51);
    var res;
    if(fiftyChars.length===51) {
      var arr = fiftyChars.split(' ');
      arr.pop();
      res=arr.join('_');
    } 
    else {
      res = fiftyChars.split(' ').join('_');
    }
    var path = `/r/${props.data.subreddit}/comments/${props.data.id}/${res}`
    return(
      <div> 
        {props.data.ups}  
        <img src={props.data.thumbnail} />
        <Link 
          to={{
            pathname: path
             }} > {props.data.title} </Link>
            }
            }
            }
      </div>
    )
  }
  return (
    <div> 
      {props.data.ups}  
      <img src={props.data.thumbnail} />
      <a href={props.data.url}> {props.data.title} </a>
    </div>
    
  )

}

export default Entry;