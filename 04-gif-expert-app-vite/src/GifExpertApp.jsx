import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories(categoryList => ['New Category', ...categoryList])
    };

    return (
        <>
            <h1> GifExpertApp</h1>
            <button onClick={onAddCategory}>Add category</button>
            <AddCategory/>
            <ol>
                {
                    categories.map((category, index) => <li key={index}>{category}</li>)
                }
            </ol>
        </>
    );
};

