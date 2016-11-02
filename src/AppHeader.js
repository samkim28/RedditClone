import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

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
              <li style={{display: 'inline'}}><IndexLink id='front' to={{pathname:'/'}} activeClassName='activeSub'>Front</IndexLink></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/All/'}} activeClassName='activeSub'>All</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Random/'}} activeClassName='activeSub'>Random</Link></li>
            </ul>
            <span style={separatorStyle}>&nbsp;|&nbsp;</span>
            <ul className='leftlinks'>
              <li style={{display: 'inline'}}><Link to={{pathname:'/r/AskReddit/'}} activeClassName='activeSub'>Askreddit</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Funny/'}} activeClassName='activeSub'>Funny</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Pics/'}} activeClassName='activeSub'>Pics</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Videos/'}} activeClassName='activeSub'>Videos</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Movies/'}} activeClassName='activeSub'>Movies</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/Gaming/'}} activeClassName='activeSub'>Gaming</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/worldnews/'}} activeClassName='activeSub'>worldnews</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/gifs/'}} activeClassName='activeSub'>gifs</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/todayilearned/'}} activeClassName='activeSub'>todayilearned</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/aww/'}} activeClassName='activeSub'>aww</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/news/'}} activeClassName='activeSub'>news</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/showerthoughts/'}} activeClassName='activeSub'>showerthoughts</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/mildlyinteresting/'}} activeClassName='activeSub'>mildlyinteresting</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/jokes/'}} activeClassName='activeSub'>jokes</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/tifu/'}} activeClassName='activeSub'>tifu</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/nottheonion/'}} activeClassName='activeSub'>nottheonion</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/r/baseball/'}} activeClassName='activeSub'>baseball</Link></li>
              <li style={{display: 'inline'}}><span style={separatorStyle}>-</span><Link to={{pathname:'/television/'}} activeClassName='activeSub'>television</Link></li>
            </ul>
          </div>
        </div>
        
      </div>
      {props.children}
    </div>
  )


}

export default AppHeader;