import React from 'react';
import snu from 'snuownd';
//code from react-remarkable
var parser = snu.getParser();

var Markdown = React.createClass({

  // getDefaultProps() {
  //   return {
  //     container: 'div',
  //     options = {}
  //   };
  // },
 
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.content()}
      </div>
    );
  },

  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps.options !== this.props.options) {
  //     this.md = new Markdown(nextProps.options);
  //   }
  // },

  content() {
    if (this.props.source) {
      return <span dangerouslySetInnerHTML={{ __html: parser.render(this.props.source) }} />;
    }
    else {
      return React.Children.map(this.props.children, child => {
        if (typeof child === 'string') {
          return <span dangerouslySetInnerHTML={{ __html: parser.render(child) }} />;
        }
        else {
          return child;
        }
      });
    }
  },

  // renderMarkdown(source) {
  //   if (!this.md) {
  //     this.md = snu.getParser();
  //   }

  //   return this.md.render(source);
  // }

});

export default Markdown;