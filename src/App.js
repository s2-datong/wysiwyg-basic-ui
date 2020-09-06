import React from 'react';
import Toolbox from "./components/Toolbox";
import Container from './components/Container';
import Properties from './components/Properties';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentlySelectedElement: null,
      container: {
        elements: [
          {id:1, type: 'text', text: "Hello World", selected: false},
          {id:2, type: "image", src: "https://picsum.photos/id/237/200/300", selected: false}
        ]
      },
      properties:{
        selected: '',
        element: null
      }
    };
  }

  selectElement(id){
    let elements = [...this.state.container.elements];
    const index = elements.findIndex(el => el.id === id);
    console.log(index);
    if(index === -1) return null;
    elements = elements.map((e) => {e.selected = false; return e; });
    elements[index].selected = true;
    const element = elements[index];
    this.setState({
      properties: {selected: element.id, element}, 
      currentlySelectedElement: element.id,
      container: {elements}
    });
  }

  isSelected(id){
    if(this.state.currentlySelectedElement === id){
      return true;
    }
    return false;
  }

  updateElement(key, value){
    
    const element = this.getSelected();
    if(element === undefined) return;

    let elements = [...this.state.container.elements];
    const index = elements.findIndex(el => el.id === element.id);

    if(/* element.hasOwnProperty(key) && */ key !== 'id'){
      elements[index][key] = value;
    }

    this.setState({container: {elements}});
    console.log(elements[index]);
  }

  getSelected(){
    const element = this.state.container.elements.find((el) => el.id === this.state.currentlySelectedElement);
    return element;
  }

  render() {
    return (
      <div className="PrintingApp">
        <Toolbox />
        <Container 
          elements={ this.state.container.elements} 
          selectElement={this.selectElement.bind(this) }
          getSelected={this.getSelected.bind(this)} 
        />
        <Properties {...this.state.properties}  
          updateElement={this.updateElement.bind(this) }
        />
      </div>
    );
  }
}

export default App;