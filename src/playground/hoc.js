// HOC - Higher order components

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
  	<h1>Info</h1>
  	<p>The info is : {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
		<p>This is sensetive Info!</p>
		<WrappedComponent {...props}/>
	</div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
  {
    props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please Authenticate</p>
  }
	</div>
  )
}

const NewInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<NewInfo info="Wear mask"/>, document.getElementById('root'))
ReactDOM.render( < AuthInfo isAuthenticated = { false } info = "Wear mask" / > , document.getElementById('root'))