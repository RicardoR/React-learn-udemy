import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    return (
        <>
            <h1> GifExpertApp</h1>
            <AddCategory setCategories = {setCategories} />
            <ol>
                {
                    categories.map((category, index) => <li key={index}>{category}</li>)
                }
            </ol>
        </>
    );
};

