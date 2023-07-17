import { Component } from "react";

class ErrorBoundarySearch extends Component{
    state = {
        error: false
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        });
    }

    render() {
        if(this.state.error){
            alert("Ничего не было найдено")
        }

        return this.props.children;
    }
}

export default ErrorBoundarySearch;