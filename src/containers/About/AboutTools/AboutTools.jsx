import React from 'react';
import "../AboutTools/AboutTools.css";
import ReduxIcon from "../../../assets/About/redux.png";
import CssIcon from "../../../assets/About/css-file.png";
import ReactIcon from "../../../assets/About/react-icon.png";
import BoxIcon from "../../../assets/About/about-tool-box.svg";
import TypeScriptIcon from "../../../assets/About/typescript.png";

export default function () {
    return (
        <div className='about-tools'>
            <div className='about-tools-heading'>
                <div>
                    <img src={BoxIcon} alt="box" />
                    Tools
                </div>
                <p>My Top Tools</p>
            </div>
            <div className='about-tools-list'>
                <div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={ReactIcon} alt="reac" />
                        </div>
                    </div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={TypeScriptIcon} alt="ts" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={CssIcon} alt="css" />
                        </div>
                    </div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={ReduxIcon} alt="redux" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
