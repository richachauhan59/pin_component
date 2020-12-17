import React from 'react'

export default class pinItem extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            
                <input 
                maxLength={4}
                style={{
                    padding:"15px",
                    width:"100px",
                    height:"80px",
                    fontSize:"14px"
                }}
                />
        )
    }
    
}
