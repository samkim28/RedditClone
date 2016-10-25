import React, {Component} from 'react';
import {Link} from 'react-router';

var AppHeader = (props)=>{
  var separatorStyle = {
    color: 'gray',
    cursor: 'default',
    marginTop: '0',
    marginRight: '0.7ex',
    marginBottom: '0',
    marginLeft: '0.7ex',
    display: 'inline'
  }
  return(
    <div >
      <div className = 'OrderLinks'>
        <div className='topheader' > 
          <div className = 'dropdown'> my subreddits </div>
          <div>
            <ul className='leftlinks'>
              <li style={{display: 'inline'}}><Link id='front' to={{pathname:'/'}}>Front</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/All'}}>All</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Random'}}>Random</Link></li>
            </ul>
            <span style={separatorStyle}>&nbsp;|&nbsp;</span>
            <ul className='leftlinks'>
              <li style={{display: 'inline'}}><Link to={{pathname:'/AskReddit'}}>Askreddit</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Funny'}}>Funny</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Pics'}}>Pics</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Videos'}}>Videos</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Movies'}}>Movies</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Gaming'}}>Gaming</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/worldnews'}}>worldnews</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/gifs'}}>gifs</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/todayilearned'}}>todayilearned</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/aww'}}>aww</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/news'}}>news</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/showerthoughts'}}>showerthoughts</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/mildlyinteresting'}}>mildlyinteresting</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/jokes'}}>jokes</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/tifu'}}>tifu</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/nottheonion'}}>nottheonion</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/baseball'}}>baseball</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/television'}}>television</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
      {props.children}
    </div>
  )


}

export default AppHeader;