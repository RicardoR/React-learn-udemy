import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente mondato')
        return () => {
            console.log('componente desmontado')
        }
    }, [])
    
    return (
        <div>
            <h3>Soy el mensaje</h3>
        </div>
    )
}
