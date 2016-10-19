import React, {Component} from 'react';
import {Link} from 'react-router';

var Entry = (props) => {
  var {data} = props;
  //decoding the url entities in case there are any
  var elem = document.createElement('textarea');
  elem.innerHTML = data.url;
  var decodedUrl = elem.value;

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
  //some titles have only symbols and will end up as blank
  if(res==='') res = '_';
  var path = `/r/${data.subreddit}/comments/${data.id}/${res}/`
  if(props.data.domain.slice(0,4) === 'self') {
    return(
      <div> 
        <div className ='Ups'>
          {data.ups}  
        </div>
        <p className ='Title'> 
          <Link to={{ pathname: path}}> {data.title} </Link> 
        </p>
        <div>        
          <Link to={{ pathname: path}}> comments </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className='Entry'> 
      <div className ='Ups'>
        {data.ups}  
      </div>
      <a href={decodedUrl}>
        <img className='EntryImage' src={data.thumbnail} />
      </a>
      <div > 
        <div>
          <a className = 'Title' href={decodedUrl}> {data.title} </a>
        </div>
        <div style = {{fontSize:'0.9em', color:'#888' }}>
          submitted X hours ago by Y to Z
        </div>
        <div >
          <Link style = {{fontSize:'0.9em', color:'#888'}} to={{ pathname: path}}> comments </Link>
        </div>
      </div>

      
    </div>
  )
}

export default Entry;