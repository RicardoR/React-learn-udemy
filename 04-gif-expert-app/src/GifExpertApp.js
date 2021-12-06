import { useState } from "react";
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const _categories = ['One Punch', 'Samurai x', 'Dragon Ball']
    const [categories, setCategories] = useState(_categories);
        
    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
          {categories.map((category, idx) => (
            <li key={`${category}-${idx}`}>{category}</li>
          ))}
        </ol>
      </>
    );
};

export default GifExpertApp;