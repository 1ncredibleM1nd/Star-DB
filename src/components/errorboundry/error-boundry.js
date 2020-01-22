import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

export default  class ErrorBoundry extends Component{
	state={
		hasError:false
	};
	render() {
		if (this.state.hasError){
			return <ErrorIndicator/>
		}
		return this.props.children;
	}
	componentDidCatch(error, errorInfo) {
		
		this.setState ({
			hasError: true
		})
	}
}