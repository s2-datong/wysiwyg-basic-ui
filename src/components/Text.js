import React from 'react';
let selectElement;

class Text extends React.Component{
    constructor(props){
        super(props);
        selectElement = props.selectElement;
        this.state = {
            id: props.id,
            value: props.value ?? '',
            font: props.font ?? 'sans-serif',
            color: props.color ?? '#000',
            bgcolor: props.bgcolor ?? 'auto',
            size: props.size ?? 'medium',
            top: props.top ?? 'auto',
            left: props.left ?? 'auto',
            selected: props.selected ?? false
        };
    }

    componentWillReceiveProps({value, font, color, bgcolor, size, top, left, selected}){
        this.setState({
            value: value ?? '',
            font: font ?? 'sans-serif',
            color: color ?? '#000',
            bgcolor: bgcolor ?? 'auto',
            size: size ?? 'medium',
            top: top ?? 'auto',
            left: left ?? 'auto',
            selected: selected ?? false
        })
    }

    render(){
        const style = {
            'position': 'relative',
            'fontFamily': this.state.font,
            'color': this.state.color,
            'backgroundColor': this.state.bgcolor,
            'fontSize': this.state.size,
            'top': this.state.top,
            'left': this.state.left
        };
        if(this.state.selected === true){
            style.border = "2px dotted #3279a8";
        }
        return <p style={style} onClick={e => selectElement(this.state.id)}>{this.state.value} </p>
        
    }
}

export default Text;