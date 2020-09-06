import React from "react";

const GenericDropDown = ({options, selectionChanged, selected}) => {
    return <select onChange={e => selectionChanged(e.target.value)}>
        {
            (options || []).map(option => {
                if(selected && option === selected){
                    return <option key={option} value={option} selected>
                    {option}
                    </option>;
                }
                return <option key={option} value={option}>
                    {option}
                </option>
            })
        }
    </select>
}

export default GenericDropDown;