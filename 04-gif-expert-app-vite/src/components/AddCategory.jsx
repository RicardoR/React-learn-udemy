import { useState } from "react";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Dragon Ball');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 3) {
            return;
        }

        setCategories((categories) => [inputValue, ...categories]);
        setInputValue('');
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

