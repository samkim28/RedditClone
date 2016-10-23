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
  
  //For the date, the data.created_utc gives us back the time in seconds
  //the date.now gives it back to us in milliseconds

  //make img verticalAlign bottom so no extra space
  return (
    <div className='Entry'> 
      <span className='rank'> 2 </span>
      <div className='vote'> 
        <div className='arrow up'> </div>
        <div> {data.ups} </div>
        <div className='arrow down'></div>
      </div>
      <a style={{width: '70px', marginRight: '5px', marginBottom: '2px'}} href={decodedUrl}>
        <img style={{width:'70px', verticalAlign: 'bottom'}} src={data.thumbnail} />
      </a>
      <div > 
        <div className = 'Title'>
          <a href={decodedUrl}> {data.title} </a>
        </div>
        <div style = {{color:'#888' }}>
          submitted {Math.floor((Date.now()-data.created_utc*1000)/3600000)} hours ago by {data.author} to /r/{data.subreddit}
        </div>
        <div style= {{paddingTop:'1', paddingBottom:'1'}} >
          <Link style = {{ color:'#888', fontWeight:'bold'}} to={{ pathname: path}}> {data.num_comments} comments </Link>
        </div>
      </div>

      
    </div>
  )
}

export default Entry;