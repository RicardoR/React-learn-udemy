import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

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
            <div>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </div>
        </>
    );
};

