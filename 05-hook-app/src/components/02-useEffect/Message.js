import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coords;
    
    useEffect(() => {

        const mouseMove = (e) => { 
            const newCoords = { x: e.x, y: e.y };
            setCoords(newCoords);
            console.log('Coords', newCoords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    
    return (
      <div>
        <h3>Soy el mensaje</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>X</th>
                <th>Y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{x}</td>
                <td>{y}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
