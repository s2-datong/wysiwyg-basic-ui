import React from "react";
import GenericDropDown from "./GenericDropDown";
let selectionChange;

class FontPicker extends React.Component{
    constructor(props){
        super(props);
        selectionChange = props.selectionChange;
        this.state = {
            fonts: ["courier", "helvetica", "sans-serif","auto", "arial", "verdana"],
            selectedFont: props.selected
        }
    }

    selectionChange(value){
        this.setState({selectedFont: value});
        selectionChange(value);
    }

    render(){
        return <GenericDropDown options={this.state.fonts} selectionChanged={this.selectionChange.bind(this)} selected={this.state.selectedFont} />
    }
}

export default FontPicker;