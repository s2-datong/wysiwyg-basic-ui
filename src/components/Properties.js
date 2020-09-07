import React from "react";
import FontPicker from "./dropdowns/FontPicker";
let updateElement;
let deleteElement;

class Properties extends React.Component{
    constructor(props){
        super(props);
        updateElement = props.updateElement;
        deleteElement = props.deleteElement;

        this.state = {
            selectedItemId: props.selected ?? '',
            selectedItem: props.element ?? null
        }
    }

    componentWillReceiveProps({selected, element}) {
        this.setState({selectedItemId: selected, selectedItem: element})
    }

    doChange(key, value){
        let obj = {selectedItem: {...this.state.selectedItem}};
        obj.selectedItem[key] = value;
        this.setState(obj);
    }

    dropDownOptionChange(value){
        console.log(value);
    }

    render(){
        if(this.state.selectedItemId === ''){
            return <div className="properties"></div>;
        }
        if(this.state.selectedItemId === 'body'){
            return <div className="properties">
                    <input type="text" onChange={e => this.doChange('bgcolor', e.target.value) } />
                </div>;
        }
        if(this.state.selectedItem !== null){
            const type = this.state.selectedItem.type;
            if(type === 'text'){
                // <input type="text" value={this.state.selectedItem.font ?? "auto"} onBlur={e => updateElement('font', e.target.value)} onChange={e => this.doChange('font', e.target.value) }/>
                return <div className="properties">
                        <label>Text</label>
                        <input type="text" value={this.state.selectedItem.text} onBlur={e => updateElement('text', e.target.value)} onChange={e => this.doChange('text', e.target.value) } />
                        <label>Font</label>
                        <FontPicker selectionChange={value => updateElement('font', value)} selected={this.state.selectedItem.font} />
                        
                        <label>Color</label>
                        <input type="text" value={this.state.selectedItem.color ?? "auto"} onBlur={e => updateElement('color', e.target.value)} onChange={e => this.doChange('color', e.target.value) }/>
                        <label>Background Color</label>
                        <input type="text" value={this.state.selectedItem.bgcolor ?? "auto"} onBlur={e => updateElement('bgcolor', e.target.value)} onChange={e => this.doChange('bgcolor', e.target.value) }/>
                        <label>Font Size</label>
                        <input type="text" value={this.state.selectedItem.size ?? "medium"} onBlur={e => updateElement('size', e.target.value)} onChange={e => this.doChange('size', e.target.value) }/>
                        <label>Top</label>
                        <input type="text" value={this.state.selectedItem.top ?? "auto"} onBlur={e => updateElement('top', e.target.value)} onChange={e => this.doChange('top', e.target.value) }/>
                        <label>Left</label>
                        <input type="text" value={this.state.selectedItem.left ?? "auto"} onBlur={e => updateElement('left', e.target.value)} onChange={e => this.doChange('left', e.target.value) }/>

                        <button onClick={deleteElement}>Delete Element</button>
                    </div>;
            }
            if(type === 'image'){
                return  <div className="properties">
                        <label>Image URL</label>
                        <input type="text" value={this.state.selectedItem.src ?? "auto"} onBlur={e => updateElement('src', e.target.value)} onChange={e => this.doChange('src', e.target.value) } />
                        <label>Radius</label>
                        <input type="text" value={this.state.selectedItem.radius ?? "auto"} onBlur={e => updateElement('radius', e.target.value)} onChange={e => this.doChange('radius', e.target.value) } />
                        <label>Image Width</label>
                        <input type="text" value={this.state.selectedItem.width ?? "auto"} onBlur={e => updateElement('width', e.target.value)} onChange={e => this.doChange('width', e.target.value) } />
                        <label>Image Height</label>
                        <input type="text" value={this.state.selectedItem.height ?? "auto"} onBlur={e => updateElement('height', e.target.value)} onChange={e => this.doChange('height', e.target.value) } />
                        <label>Top</label>
                        <input type="text" value={this.state.selectedItem.top ?? "auto"} onBlur={e => updateElement('top', e.target.value)} onChange={e => this.doChange('top', e.target.value) } />
                        <label>Left</label>
                        <input type="text" value={this.state.selectedItem.left ?? "auto"} onBlur={e => updateElement('left', e.target.value)} onChange={e => this.doChange('left', e.target.value) } />

                        <button onClick={deleteElement}>Delete Element</button>
                    </div>;
            }
        }

        return <div className="properties"></div>;
    }
}

export default Properties;