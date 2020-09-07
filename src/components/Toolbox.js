import React from "react";
import ParagraphIcon from "../assets/img/paragraph.svg";
import ImageIcon from "../assets/img/photo.svg";

const Toolbox = ({addImage, addParagraph}) => {
    const style = {
        width: '20px',
        height: '20px'
    };
    const h4style = {
        textAlign: 'center'
    };
    return (
        <div className="toolbox">
            <h4 style={h4style}>Toolbox</h4>
            <div className="add-text" onClick={addParagraph} >
                <img src={ParagraphIcon} style={style} />
                <div>Add Paragraph</div>
            </div>
            <div className="add-image" onClick={addImage} >
                <img src={ImageIcon} style={style} />
                <div>Add Image</div>
            </div>
        </div>
    );
}

export default Toolbox;