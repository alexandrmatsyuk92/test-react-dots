var React = require('react')
var createReactClass = require('create-react-class')
var DotDescriptor = require('./dotDescriptor.jsx')

module.exports = createReactClass({
  getInitialState: () => ({hover: false}),
  onMouseEnter() {
    this.setState({
        hover: true
    });
  },
  onMouseLeave() {
    this.setState({
        hover: false
    });
  },
  render () {
    let dotDescriptor;
    if(this.state.hover){
      dotDescriptor = <DotDescriptor dot={this.props.dot}/>
    }
    return <span>
      <span onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={this.props.dot.style}/>
      {dotDescriptor}
    </span>
  }
})