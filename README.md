## Uncontrolled Components intro[ reference ](https://reactjs.org/docs/uncontrolled-components.html)

In uncontrolled components form data is handled by DOM

./src/UncontrolledComponentDocsExample.tsx

```tsx
import * as React from "react";

export class NameForm extends React.Component {
    public input = React.createRef<HTMLInputElement>();

    private handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        if (this.input.current) {
            alert(`A name was submitted ${this.input.current.value}`);
        }
        evt.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="input" ref={this.input} defaultValue="Bob" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
```

### defaultValue and defaultChecked

In the react rendering lifeCycle the `value` attribute on form elements will override in the DOM, with an uncontrolled component, you often want react ot specify the initial value, but leave subsequent update uncontrolled. to handle this case, you can specify `defaultValue` attribute instead of value and `defaultChecked` instead of checked

### The file input tag

in HTML an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JS

**In react, an <input type="file"/> is always an uncontrolled component because it's value only be set by user, and not programmatically**

```tsx
import * as React from "react";

export const FileInput: React.FC = () => {
    const fileInput = React.useRef() as React.RefObject<HTMLInputElement>;

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        if (fileInput.current && fileInput.current.files) {
            alert(`Selected file - ${fileInput.current.files[0].name}`);
        }
        evt.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" ref={fileInput} />
            <input type="submit" value="Submit" />
        </form>
    );
};
```
