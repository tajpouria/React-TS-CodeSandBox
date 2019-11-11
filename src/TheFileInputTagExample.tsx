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
