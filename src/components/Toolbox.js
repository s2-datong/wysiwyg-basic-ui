import React from "react";

const Toolbox = ({addImage, addText}) => {
    return (
        <div className="toolbox">
            <div className="add-text" onClick={addText} >
                Add Text
            </div>
            <div className="add-image" onClick={addImage} >
                Add Image
            </div>
        </div>
    );
}

export default Toolbox;