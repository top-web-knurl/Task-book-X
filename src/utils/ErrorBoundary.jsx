import { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;

        if (error) {
            return (
                <div>
                    <p>Упс!</p>
                    <p>{error.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;