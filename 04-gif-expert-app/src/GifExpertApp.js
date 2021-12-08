import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const _categories = ['Dragon Ball'];
    const [categories, setCategories] = useState(_categories);
        
    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
          {
            categories.map((category, index) =>
              <GifGrid category={category} key={`${category}-${index}`} />
            )
          }
        </ol>
      </>
    );
};

export default GifExpertApp;