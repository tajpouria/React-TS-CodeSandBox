## Introduction to react error boundary [reference](https://reactjs.org/docs/error-boundaries.html)

Error boundary are react components that catches errors any where in their child component tree, log those errors, and display fallback UI instead of component that crashed,
Error boundary caches errors during rendering, in lifeCycle methods and construct the whole tree below them

**Error boundary do not catch errors for:**

-   Event handlers
-   Asynchronous code (`setTimeout`, `requestAnimationFrame` and `callbacks`)
-   Server side rendering
-   Error thrown in error boundary itself

**A class Component becomes an error boundary if it defines either or both of following methods:**

-   static `getDerivedStateFromError()` to render fallback UI after an error has been throw
-   `componentDidCatch()` to log error information

```tsx
import * as React from "react";

export class ErrorBoundary extends React.Component {
    public state = { hasError: false };

    public static getDerivedStateFromError(_error: Error) {
        // update and return state to show fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
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
```

Then you can use it as a regular component:

```tsx
<ErrorBoundary>
    <MyWidget />
</ErrorBoundary>
```

-   Error boundary works like JS `catch {}` block but for components
-   Only class components can be error boundary
-   Error boundary only catch errors in the components **below** them in the tree

### How About Event Handlers?

Error boundaries do not catch errors inside event handlers.

If you need to catch an error inside event handler, use the regular JavaScript try / catch statement:

```tsx

export const App = () =>{
    const [error, setError] = useState(null)

    const handleClick =(evt) => {
        try{
            // do sth
        }catch(err){
            setError(err)
        }
    }

    return <div onCLick={handleClick}>Click Me<div>
}
```

./src/CounterErrorBoundaryExample.tsx

```jsx
import * as React from "react";

class ErrorBoundary extends React.Component<
    any,
    { error: Error | null, errorInfo: React.ErrorInfo | null }
> {
    constructor(props: any) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class BuggyCounter extends React.Component<any, { counter: number }> {
    constructor(props: any) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error("I crashed!");
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

export default () => {
    return (
        <div>
            <p>
                <b>
                    This is an example of error boundaries in React 16.
                    <br />
                    <br />
                    Click on the numbers to increase the counters.
                    <br />
                    The counter is programmed to throw when it reaches 5. This simulates
                    a JavaScript error in a component.
                </b>
            </p>
            <hr />
            <ErrorBoundary>
                <p>
                    These two counters are inside the same error boundary. If
                    one crashes, the error boundary will replace both of them.
                </p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>
                These two counters are each inside of their own error boundary.
                So if one crashes, the other is not affected.
            </p>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
};
```
