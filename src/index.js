import React from 'react'
import ReactDOM from 'react-dom'
// import Something from './components/something.js'
// import Lorem from './components/lorem.js'

class Main extends React.Component {
  render() {
    this.props.doesNotExist

    return (
      <div>
        Hello, {this.props.name}!
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))
