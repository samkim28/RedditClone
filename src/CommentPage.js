import React, {Component} from 'react';
import Comment from './Comment';
import {Link} from 'react-router';

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      comments: null,
      header: null
    };
  }

  componentDidMount() {
    var myRequest = new Request(`https://www.reddit.com${this.props.location.pathname}.json`)
    fetch(myRequest).then(function(response) {
      console.log('response from api call', response);
      return response.json();
    }).then(function(json){
      console.log('the json response from api call', json[1].data.children);
      this.setState({comments:json[1].data.children, header: json[0].data.children[0].data})
    }.bind(this)) 
  }

  render() {
    if(this.state.comments) {

      var {header}=this.state;

      //decoding the url entities in case there are any
      var elem = document.createElement('textarea');
      elem.innerHTML = header.url;
      var decodedUrl = elem.value;


      var filteredComments = this.state.comments.filter((curr)=>curr.kind!=='more');
      var replies = filteredComments.map((reply)=>{
        return(
          <Comment key={reply.data.id} data={reply.data}></Comment>
        );
      })

      //if there is no picture then don't display the anchor/image
      var commentPic = { float: 'left', width: '70px', marginRight: '5px', marginBottom: '2px'}
      if(header.thumbnail==='') { commentPic.display = 'none';}


      //i don't think i need to check header in state
      return (
        <div>
          <div className='blueheader'> 
            <a href="/" id="header-img"></a>
            &nbsp;
            <Link className='pagename' to={{pathname:`/r/${this.props.params.subreddit}/`}}>{this.props.params.subreddit}</Link>
            <ul className='tabmenu'> 
              <li><Link activeClassName='activeOrder' to={{pathname:this.props.location.pathname}}>comments</Link></li>
            </ul>
          </div>

          <div style={{margin: '7px 5px 0px 5px'}}> 

            <div style={{marginBottom: '8px', paddingLeft: '3px'}}>
              <div className='vote' style={{float: 'left'}}> 
                <div className='arrow up'> </div>
                <div> {header.ups} </div>
                <div className='arrow down'></div>
              </div>
              <a style={commentPic} href={decodedUrl}><img style={{width:'70px', verticalAlign: 'bottom'}} src={header.thumbnail} /></a>
              <div style={{overflow: 'hidden'}}> 
                <div className = 'Title'>
                  <a href={decodedUrl}> {header.title} </a>
                </div>
                <div style = {{color:'#888' }}>
                  submitted {Math.floor((Date.now()-header.created_utc*1000)/3600000)} hours ago by {header.author}
                </div>
                <div style= {{paddingTop:'1', paddingBottom:'1'}} >
                  <Link style = {{ lineHeight: '1.6em', color:'#888', fontWeight:'bold'}} to={{ pathname: 'hi'}}> {header.num_comments} comments </Link>
                </div>
              </div>
            </div>
            <div>
              <div style={{margin:'10px 310px 0px 10px', paddingBottom: '3px', borderBottom:'1px dotted gray', fontSize: '16px', fontWeight: 'normal'}}>top 200 comments</div>
              <div style={{border:'none', margin:'0 310px 10px 10px', padding: '0', color: 'gray', fontSize: 'larger'}}>
                <span >sorted by: </span>
                <div style={{display:'inline'}}>dropdown</div>
              </div>

              {/* this will be an input for the textarea later*/}
              <div style={{margin:'0 0 10px 10px'}}>
                <textarea style={{clear: 'left', display: 'block', marginTop: '5px', marginBottom: '5px'}} rows="1" cols="1" className='commentBox' ></textarea>
                <button style={{margin: '5px 5px 10px 0'}}>save</button> 
              </div>

              <div>{replies}</div>

            </div>

          </div>
        </div>
      )
    }
    return (
      <div>Hi Rong</div>
    )
  }
}

export default CommentPage;