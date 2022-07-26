import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Dragon Ball');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

