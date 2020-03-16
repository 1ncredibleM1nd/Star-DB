import React from "react";
import error from './error.gif';
import './error-indicator.sass'
const ErrorIndicator = ()=>{

return(
	<div className='errorInd'>
		<span className="errorContent">Something gone Wrong</span>
	<img className="Error" src={error} alt="Error"/>
	
	<span className="errorContent">But we've already call Droids to Fix problems</span>
	</div>
	);
};




export default ErrorIndicator;