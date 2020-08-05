import React from 'react'
import {
    Link
  } from "react-router-dom"
import { HamburgerButton } from 'react-hamburger-button';
import { CSSTransition } from 'react-transition-group';

interface State {
    open?: boolean;
    profilePic?: boolean;
}

export default class Header extends React.Component<{}, State> {
    private classNavi:boolean = false;
    
    constructor(props) {
        super(props);
    }

    public readonly state: State = {
        open: false,
        profilePic: true
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
                <div className="box">
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
                    <div className="about">
                        <CSSTransition
                            in={this.state.profilePic}
                            timeout={4000}
                            classNames="profilePicFade"
                            appear
                            >
                                <div className="profilePic" />
                        </CSSTransition>

                        <CSSTransition
                            in={this.state.profilePic}
                            timeout={4000}
                            classNames="profileAboutMeFade"
                            appear
                            >
                                <div className="profileAboutMe">
                                    <p>
                                        Provident eius nostrum delectus sed nemo quia. Sed exercitationem quasi delectus vitae eos magni et. Dolores recusandae vitae aut. 
                                        Qui possimus assumenda dolores cumque. Alias eligendi tempore praesentium culpa dolore. Et dolores aliquid dolor possimus blanditiis.
                                        Non necessitatibus ut fugit earum magni consequuntur voluptatem est. Consequatur porro magnam deleniti. 
                                        Minus voluptatem maiores mollitia soluta. Fuga laboriosam ut quia ea adipisci voluptas et. 
                                        Laboriosam molestias enim ipsa officiis vero at harum doloremque. Porro nemo ipsam eligendi ut ut. 
                                        Amet ex molestiae ut reiciendis fugit accusamus qui quia. Vitae est veniam et consequatur. 
                                    </p>
                                </div>
                        </CSSTransition>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}