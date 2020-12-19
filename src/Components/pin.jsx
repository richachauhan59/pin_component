import React from 'react'
import PinItem from './pinItem'

export default class pin extends React.Component {
    constructor(props){
        super(props)
        this.values = new Array(props.length).fill('')
        this.elem = []
    }

    handleChange = (value, i) => {
        const {length} = this.props
        this.values[i] = value
        
        if(value.length > 3 && i < length-1 ){
            this.elem[i+1].input.focus();
        }
        this.props.onChange(this.values.join(""));
    }

    onBackspace = (index, e) => {
		if (index > 0) {
			this.elem[index - 1].input.focus();
		}
        this.props.onChange(this.values.join(""));
    };

    handlePaste = (e) => {
		e.preventDefault();
        var x = e.clipboardData.getData('Text').split('')
        let temp=[]
        var str=""
        for(var j=0;j<x.length;j++){
            str+=x[j];
        if((j+1)%4===0){
            temp.push(str)
            str=""
        }
        }
		temp.forEach((value, i) => {
            this.values[i] = value;
            console.log(value)
			this.elem[i].input.value = value;
			if (i < this.props.length - 1) {
				this.elem[i + 1].input.focus();
			}
        })
        this.props.onChange(this.values.join(""));
	};


    render(){
        
        return (
            <div onPaste={this.handlePaste}>
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

