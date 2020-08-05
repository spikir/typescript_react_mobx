import React from 'react'
import {
    Link
  } from "react-router-dom"
import { HamburgerButton } from 'react-hamburger-button';

interface State {
    open?: boolean;
}

export default class Header extends React.Component<{}, State> {
    private classNavi:boolean = false;
    
    constructor(props) {
        super(props);
    }

    public readonly state: State = {
        open: false,
	};

    handleClick() {
        this.classNavi = !this.classNavi;
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    Nadege
                </div>
                <div className="navi">
                    <div className="btnBurger">
                    <HamburgerButton
                        open={this.state.open}
                        onClick={this.handleClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        color='black'
                        animationDuration={0.5}
                    />
                    </div>
                    <div className={this.classNavi ? 'naviWrapShow' : 'naviWrap naviWrapHidden'}>
                        <div className="naviRow">
                        <div className="naviRowOverlay"></div>
                        <Link to="/">Home</Link>
                        </div>
                        <div className="naviRow">
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
            </React.Fragment>
        );
    };
}