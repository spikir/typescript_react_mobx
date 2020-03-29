import React from 'react';
import ReactDOM from "react-dom"
import parse from 'html-react-parser';
import { observer } from "mobx-react"
import { AppStore } from "../AppStore/AppStore"


interface IProps {
    appStore: AppStore

}

interface IState {}

@observer
export class Art992 extends React.Component<IProps, IState> {
    public render() {
        const appStore = this.props.appStore;
        let list: string;
        list = '';
        appStore.firstSixArt.model.map((entry, index) => {
            if(index == 0) {
                list += '<div className="containerMainPic">';
                    list += '<img className="mainPicArt" src='+entry.art_link+' />';
                list += '</div>';
                list += '<div className="listArt">'; //introduce class listArt
                list += '<div className="row">'; //introduce class row
            } else {
                list += '<div className="article">'; //introduce class article
                    list += '<div className="articleImg">'; //introduce class articleImg
                        list += '<img className="listImg" src='+entry.art_link+' />';
				        list += '<div className="overlay"></div>';
                    list += '</div>'; //Finish class articleImg
                    list += '<div className="articleText">'; //Introduce class articleText
                        list += '<div className="articleTextTitle">'+entry.art_title+'</div>';
                        list += '<div className="articleTextText">'+entry.art_desc+'</div>';
                    list += '</div>'; //Finish class articleText
                list += '</div>'; //Finish class article
            } 
        });
        list += '</div>'; //Finish class row
        list += '</div>'; //Finish class listArt
        return  parse(list);
    }
}