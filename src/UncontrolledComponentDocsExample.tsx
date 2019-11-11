import * as React from "react";

export class NameForm extends React.Component {
    public input = React.createRef<HTMLInputElement>();
    public isMale = React.createRef<HTMLInputElement>();

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
                    <input
                        type="checkbox"
                        ref={this.isMale}
                        defaultChecked={true}
                    />
                </label>
                <input type="submit" value="Submit" />
                <input type="file" />
            </form>
        );
    }
}
