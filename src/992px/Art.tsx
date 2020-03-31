import React from 'react';
import ReactDOM from "react-dom"
import parse from 'html-react-parser';
import { observer } from "mobx-react"
import { AppStore } from "../AppStore/AppStore"
import Scroll from "./Scroll"


interface IProps {
    appStore: AppStore

}

interface IState {}

@observer
export class Art992 extends React.Component<IProps, IState>  {

    public render() {
        const appStore = this.props.appStore;
        let list: string = '';
        appStore.firstSixArt.model.map((entry, index) => {
            if(index == 0) {
                const fixScroll: string = appStore.classFixScroll.model.find(element => 'MainPic');
                list += '<div class="containerMainPic '+fixScroll+'">';
                    list += '<img class="mainPicArt" src='+entry.art_link+' />';
                list += '</div>';
                list += '<div class="listArt">'; //introduce class listArt
                list += '<div class="row">'; //introduce class row
            } else {
                list += '<div class="article">'; //introduce class article
                    list += '<div class="articleImg">'; //introduce class articleImg
                        list += '<img class="listImg" src='+entry.art_link+' />';
				        list += '<div class="overlay"></div>';
                    list += '</div>'; //Finish class articleImg
                    list += '<div class="articleText">'; //Introduce class articleText
                        list += '<div class="articleTextTitle">'+entry.art_title+'</div>';
                        list += '<div class="articleTextText">'+entry.art_desc+'</div>';
                    list += '</div>'; //Finish class articleText
                list += '</div>'; //Finish class article
            } 
        });
        list += '</div>'; //Finish class row
        list += '</div>'; //Finish class listArt
        return  parse(list);
    }
}