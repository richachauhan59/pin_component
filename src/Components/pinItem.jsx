import React from 'react'
import '../App.css'

export default class pinItem extends React.Component {

    handleKey = (e) => {
        if(e.keyCode === 8 && !this.input.value){
            this.props.onBackspace(e)
        }
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
                    ref={n => this.input = n}
                    onChange={this.onChange}
                    maxLength={4}
                    onKeyDown={this.handleKey}
                    style={{
                        padding:"15px",
                        width:"150px",
                        height:"60px",
                        fontSize:"50px",
                        margin:"27px",
                        border: "6px solid #749fb0",
                        borderRadius: "5px",
                    }}
                />
        )
    }
    
}
