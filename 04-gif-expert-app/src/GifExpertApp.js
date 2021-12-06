import { useState } from "react";


const GifExpertApp = () => {

    const _categories = ['One Punch', 'Samurai x', 'Dragon Ball']
    const [categories, setsCategories] = useState(_categories);
    
    const handleAddCategory = () => setsCategories([...categories, 'Superman']);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAddCategory}>Add category</button>
            <ol>
                { categories.map((category, idx) => <li key={`${category}-${idx}`}>{category}</li>) }
            </ol>
        </>
    )
};

export default GifExpertApp;