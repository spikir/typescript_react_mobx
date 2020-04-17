import React from 'react'
import {
    Link
  } from "react-router-dom"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    Nadege
                </div>
                <div className="navi">
                    <div className="naviWrap">
                    <   div className="naviRow">
                            <div className="naviRowOverlay"></div>
                            <Link to="/about">About</Link>
                            </div>
                            <div className="naviRow">
                            <div className="naviRowOverlay"></div>
                            <Link to="/art">Art</Link>
                            </div>
                            <div className="naviRow">
                            <div className="naviRowOverlay"></div>
                            <Link to="/mode">Mode</Link>
                            </div>
                            <div className="naviRow">
                            <div className="naviRowOverlay"></div>
                            <Link to="/photography">Photography</Link>
                            </div>
                            <div className="naviRow">
                            <div className="naviRowOverlay"></div>
                            <Link to="/film">Film</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}