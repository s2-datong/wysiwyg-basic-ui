import React from "react";
import ParagraphIcon from "../assets/img/paragraph.svg";
import ImageIcon from "../assets/img/photo.svg";

const Toolbox = ({addImage, addParagraph}) => {
    const style = {
        width: '50px',
        height: '50px'
    };
    return (
        <div className="toolbox">
            <div className="add-text" onClick={addParagraph} >
                <img src={ParagraphIcon} style={style} />
                <p>Add Paragraph</p>
            </div>
            <div className="add-image" onClick={addImage} >
                <img src={ImageIcon} style={style} />
                <p>Add Image</p>
            </div>
        </div>
    );
}

export default Toolbox;