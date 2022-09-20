import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 3) {
            return;
        }

        onNewCategory(inputValue.trim());
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};
