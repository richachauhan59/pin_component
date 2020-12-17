import React from 'react'
import PinItem from './pinItem'

export default class pin extends React.Component {
    constructor(props){
        super(props)
        this.values = new Array(props.length).fill('')
    }

    render(){
        return (
            <div>
                {
                    this.values.map((item, i) => (
                        <PinItem />
                    ))
                }
            </div>
        )
    }
   
}

