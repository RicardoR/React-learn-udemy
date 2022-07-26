import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    };

    return (
        <>
            <h1> GifExpertApp</h1>
            <AddCategory onNewCategory={category => onAddCategory(category)}/>
            <ol>
                {
                    categories.map((category, index) => <li key={index}>{category}</li>)
                }
            </ol>
        </>
    );
};

