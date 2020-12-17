import React from 'react'
import PinItem from './pinItem'

export default class pin extends React.Component {
    constructor(props){
        super(props)
        this.values = new Array(props.length).fill('')
        this.elem = []
    }

    handleChange = (value, i) => {
        console.log(this.props)
        const {length} = this.props
        this.values[i] = value
        

        if(value.length > 3 && i < length-1 ){
            this.elem[i+1].input.focus();
        }
       
    }

    onBackspace = (index, e) => {
		if (index > 0) {
			this.elements[index - 1].input.focus();
		}
		this.props.onChange(this.values.join(''));
	};


    render(){
        
        return (
            <div>
                {
                    this.values.map((item, i) => (
                        <PinItem 
                        key={i}
                        ref={n => (this.elem[i] = n)} 
                        onChange={(val) => this.handleChange(val, i)} 
                        onBackspace = {(e) => this.onBackspace(i, e)}
                        />
                    ))
                }
            </div>
        )
    }
   
}

