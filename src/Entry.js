import React, {Component} from 'react';
import {Link} from 'react-router';

var Entry = (props) => {
  var {data} = props;
  //if the domain is self.something then it will link to the comment section
  //then we make the title less than or equal to 50 chars with whole words. 
  var noCrap = data.title.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_'"`~()]/g,"");
  var fiftyChars = noCrap.slice(0,51);
  var res;
  if(fiftyChars.length===51) {
    var arr = fiftyChars.split(' ');
    arr.pop();
    res=arr.join('_');
  } 
  else {
    res = fiftyChars.split(' ').join('_');
  }
  var path = `/r/${data.subreddit}/comments/${data.id}/${res}/`
  if(props.data.domain.slice(0,4) === 'self') {
    return(
      <div> 
        {data.ups}  
        <Link to={{ pathname: path}}> {data.title} </Link> 
        <Link to={{ pathname: path}}> comments </Link>
      </div>
    )
  }
  return (
    <div> 
      {data.ups}  
      <img src={data.thumbnail} />
      <a href={data.url}> {data.title} </a>
      <Link to={{ pathname: path}}> comments </Link>
    </div>
  )
}

export default Entry;