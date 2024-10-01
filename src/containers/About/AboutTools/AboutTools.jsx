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
                    <p>Tools</p>
                </div>
                <p>My Top 4 Tools</p>
            </div>
            <div className='about-tools-list'>
                <div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={ReactIcon} alt="reac" />
                        </div>
                        <div className='about-tool-txt'>
                            <h4>React JS</h4>
                            <p>A JS Library</p>
                        </div>
                    </div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={TypeScriptIcon} alt="ts" />
                        </div>
                        <div className='about-tool-txt'>
                            <h4>TypeScript</h4>
                            <p>Programming Language</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={CssIcon} alt="css" />
                        </div>
                        <div className='about-tool-txt'>
                            <h4>CSS</h4>
                            <p>Styling Language</p>
                        </div>
                    </div>
                    <div className='about-tool-container'>
                        <div className='about-tool-icon-container'>
                            <img src={ReduxIcon} alt="redux" />
                        </div>
                        <div className='about-tool-txt'>
                            <h4>Redux</h4>
                            <p>State Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
