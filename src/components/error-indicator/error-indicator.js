import React from 'react';

import './error-indicator.css';
import icon from './droid.gif';

const ErrorIndicator = () => {
	return (
		
		<div className="error-indicator">
			<img src={icon} className="droid" alt="error icon"/>
			<span className="boom">BOOM!</span>
			<span>
        something has gone terribly wrong
      </span>
			<span>
        (but we already sent droids to fix it)
      </span>
		</div>
	
	);
};

export default ErrorIndicator;