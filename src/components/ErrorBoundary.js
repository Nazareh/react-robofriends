import React,{Component} from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {hasError: false};
        this.state = {errorMsg: ""};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
        this.setState({errorMsg:error.message})

    }

    render(){
        if (this.state.hasError){
            return <h1>Oooops. That is not good! {this.state.errorMsg}</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;