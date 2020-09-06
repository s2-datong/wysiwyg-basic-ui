import React from "react";
import Text from "./Text";
import Image from "./Image";

let selectElement;

class Container extends React.Component{
    constructor(props){
        super(props);
        selectElement = props.selectElement;
        this.state = {
            elements: props.elements
        };
    }

    render(){
        return <div className="container">
        {this.state.elements.map(element => {
                if(element.type === 'text'){
                    return <Text 
                                key={element.id} 
                                id={element.id} 
                                value={element.text} 
                                font={element.font}
                                color={element.color}
                                bgcolor={element.bgcolor}
                                size={element.size}
                                top={element.top}
                                left={element.left}
                                selectElement={selectElement}
                            />
                }

                if(element.type === "image"){
                    return <Image 
                        key={element.id} 
                        id={element.id} 
                        src={element.src} 
                        radius={element.radius}
                        width={element.width}
                        height={element.height}
                        top={element.top}
                        left={element.left}
                        selectElement={selectElement} />
                }

                return <div>Invalid Element Type</div>
            })
        }
    </div>
    }
}

  export default Container;