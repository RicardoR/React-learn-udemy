import React, { useState } from 'react'
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

export const RealExample = () => {
    const [show, setShow] = useState(false);

    return (
      <>
        <h1>RealExample</h1>
            <hr />
            
            {show && <MultipleCustomHooks />}
            
            <p className='mt-3'>
                <button
                    className='btn btn-primary'
                    onClick={() => setShow(!show)}
                >
                Show / Hide
                </button>
            </p>
      </>
    );
}
