import React from 'react';
import { CatPropType } from '../../utils/CatPropType';
import { SvgLoader, SvgProxy } from "react-svgmt";
import './CatView.css';

interface CatViewProps {
    catProps: CatPropType[];
}

export const CatView: React.FC<CatViewProps> = ({ catProps }) => {
    return (
        <article className="CatView">
            <SvgLoader path={`${process.env.PUBLIC_URL}/images/render/catsvg.svg`}>
            <SvgProxy selector="#eye-left-color" fill={catProps[1].color} />
                <SvgProxy selector="#eye-right-color" fill={catProps[1].color}  />
            </SvgLoader>
            {/*<h4>Atributo: {catProps[0].attribute} = Tipo: {catProps[0].type} y Color: {catProps[0].color}</h4>
            <h4>Atributo: {catProps[1].attribute} = Tipo: {catProps[1].type} y Color: {catProps[1].color}</h4>
            <h4>Atributo: {catProps[2].attribute} = Tipo: {catProps[2].type} y Color: {catProps[2].color}</h4>
    <h4>Atributo: {catProps[3].attribute} = Tipo: {catProps[3].type} y Color: {catProps[3].color}</h4>*/}
        </article>
    )
}