import React from 'react';
import { AttributeTypeItem } from '../AttributeTypeItem/AttributeTypeItem';
import './AttributeTypeSection.css';

interface AttributeTypeSectionProps {
    itemList: { id: number, value: string, url: string, checked: boolean }[];
    onEditAttributeType: (newType: string) => void;
}

export const AttributeTypeSection: React.FC<AttributeTypeSectionProps> = ({ itemList, onEditAttributeType }) => {
    return (
        <section className="AttributeTypeSection">
            <h3 className="AttributeTypeSection__title">Tipo</h3>
            <div className="AttributeTypeSection__items">
                {itemList.map(({ id, value, url, checked }) => {
                    const intermediateEditType = () => {
                        onEditAttributeType(value);
                    }
                    return <AttributeTypeItem key={id} value={value} url={url} checked={checked} onEditAttributeType={intermediateEditType} />
                })}
            </div>
        </section>
    )
}