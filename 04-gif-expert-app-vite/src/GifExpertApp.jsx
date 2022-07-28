import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        const categoryExists = categories.includes(newCategory);
        if (categoryExists) {
            return;
        }

        setCategories([newCategory, ...categories])
    };

    return (
        <>
            <h1> GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory}/>
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    );
};

