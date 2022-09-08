import React from 'react'
import Card from './components/card'

class main extends React.Component {
    render(){
        return (
            <div>
                <Card
                    title="Nombre de usuario"
                    description="hola mundo"
                    leftColor=""
                    rightColor=""
                />
            </div>
        )
    }

}

export default main
