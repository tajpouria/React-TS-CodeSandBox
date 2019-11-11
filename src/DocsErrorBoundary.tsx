import * as React from "react";

export class ErrorBoundary extends React.Component {
    public state = { hasError: false };

    public static getDerivedStateFromError(_error: Error) {
        // update and return state to show fallback UI
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo: React.ErrorInfo) {
        // also log to report the error 
        console.error(error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            // fallback UI
            return <h1>Something went wrong</h1>;
        }

        return this.props.children;
    }
}
