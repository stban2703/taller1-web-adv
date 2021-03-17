import React, { useState } from 'react';
import { EditPanel } from '../../components/EditPanel/EditPanel';

const initialProps = [
    {
        attribute: "fur",
        type: "blank",
        color: "#000000",
    },
    {
        attribute: "eyes",
        type: "expanded",
        color: "#000000",
    },
    {
        attribute: "necklace",
        type: "blank",
        color: "#000000",
    },
    {
        attribute: "hat",
        type: "blank",
        color: "#000000",
    },
    {
        attribute: "scene",
        type: "blank",
        filter: "none",
    },
]

const initialAttributes = [
    {
        id: 0,
        attribute: "fur",
        checked: true
    },
    {
        id: 1,
        attribute: "eyes",
        checked: false
    },
    {
        id: 2,
        attribute: "necklace",
        checked: false
    },
    {
        id: 3,
        attribute: "hat",
        checked: false
    },
    {
        id: 4,
        attribute: "scene",
        checked: false
    }
]

export const App = () => {
    const [catProps, setCatProps] = useState(initialProps);
    const [attributeList, setAttributeList] = useState(initialAttributes);
    const [currentAttribute, setCurrentAttribute] = useState("fur");

    const handleCurrentAttribute = (newCurrentAttribute: string) => {
        const copy = attributeList.slice();
        /*const index = copy.findIndex((elem) => {
          return elem.attribute === newCurrentAttribute;
        });
        copy[index].checked = true;*/
        copy.forEach(e => {
            if(e.attribute === newCurrentAttribute) {
                e.checked = true;
            } else e.checked = false;
        })
        setAttributeList(copy);
        setCurrentAttribute(newCurrentAttribute);
    }

    const handleAttributeType = (newType: string) => {
        const copy = catProps.slice();
        const index = copy.findIndex((elem) => {
            return elem.attribute === currentAttribute;
        });

        copy[index].type = newType;
        setCatProps(copy);
        console.log(catProps[index].type + " para " + catProps[index].attribute);
    }

    return (
        <main>
            <EditPanel attributeList={attributeList} currentAttribute={currentAttribute} onChangeCurrentAttribute={handleCurrentAttribute} onEditAttributeType={handleAttributeType}/>
        </main>
    );
}