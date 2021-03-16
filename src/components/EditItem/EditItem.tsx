import React, { useState } from 'react';
import { getTypeSrcFromValue } from '../../utils/getTypeSrcFromValue';
import './EditItem.css';

interface EditItemProps {
    value: string;
    onEditAttributeType: () => void;
}

export const EditItem: React.FC<EditItemProps> = ({ value, onEditAttributeType }) => {
    const imageSrc = getTypeSrcFromValue(value);
    const [ checked, setChecked ] = useState(false)

    return (
        <div className="EditItem" onClick={onEditAttributeType}>
            <img className="EditItem__image" src={imageSrc} alt="" />
            <img className={`EditItem__check ${checked ? '' : 'EditItem__check--remove'}`} src="images/items/checked.svg" alt="" />
        </div>
    )
}