import React from 'react';

export default abstract class ScrollFix extends React.Component {

    public classFixScroll: string;

    constructor(props) {
    super(props);
    this.classFixScroll = '';
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollList);
        this.scrollList();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollList);
    }

    scrollList = () => {
        const cont = document.getElementsByClassName("art");
        let i:number = 0;
        Array.from(cont).forEach((div:HTMLElement) => {
            let post: HTMLElement = div;
            let position = div.offsetTop - document.documentElement.scrollTop;
            if (position <= 0) {
                        if(innerWidth>=992) {
                let str = div.className;
                this.classFixScroll = 'fixScroll '+str.substr(5, str.length);
                        }
            } else {
                let str = div.className;
                this.classFixScroll = 'fixScrollNot '+str.substr(5, str.length);
            }
            i++;
        });
    }
}
