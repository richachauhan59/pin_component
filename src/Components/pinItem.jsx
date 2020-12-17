import React from 'react'

export default class pinItem extends React.Component {
    constructor(props){
        super(props)

    }

    focus = () => {
        this.input.focus()
    }

    onChange = (e) => {
        this.props.onChange(e.target.value)
    }

    render(){
        return (
           
                <input 
                    ref={n => this.input[i] = n}
                    onChange={this.onChange}
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
