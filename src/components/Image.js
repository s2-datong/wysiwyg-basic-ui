import React from 'react';
let selectElement;

class Image extends React.Component{
    constructor(props){
        super(props);
        selectElement = props.selectElement;
        this.state = {
            id: props.id,
            src: props.src ?? '',
            radius: props.radius ?? '5px',
            width: props.width ?? 'auto',
            height: props.height ?? 'auto',
            top: props.top ?? 'auto',
            left: props.left ?? 'auto',
            selected: props.selected ?? false
        };
    }

    componentWillReceiveProps({src, radius, width, height, top, left, selected}){
        this.setState({
            src: src ?? '',
            radius: radius ?? '5px',
            width: width ?? 'auto',
            height: height ?? 'auto',
            top: top ?? 'auto',
            left: left ?? 'auto',
            selected: selected ?? false
        })
    }

    render(){
        const style = {
            'position': 'relative',
            'borderRadius': this.state.radius,
            'width': this.state.width,
            'height': this.state.height,
            'top': this.state.top,
            'left': this.state.left
        };
        if(this.state.selected === true){
            style.border = "2px dotted #3279a8";
        }
        return (
            <img src={this.state.src} style={style} onClick={e => selectElement(this.state.id) } />
        );
    }
}

export default Image;