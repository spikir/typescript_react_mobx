import React from 'react';
import ReactDOM from "react-dom"
import parse from 'html-react-parser'
import { observer } from "mobx-react"
import { map, filter } from 'rxjs/operators';
import { AppStore } from "../AppStore/AppStore"
import Scroll from "./Scroll"
import {action} from "mobx";


interface IProps {
    appStore: AppStore
}

interface IState {}

@observer export class Art992 extends React.Component<IProps, IState>  {

    public list: string = '';

    constructor(props) {
        super(props);
        this.loadData();
    }

    @action async loadData() {
        const appStore = this.props.appStore;
        await appStore.firstSixArt().then(res => {
            const jsonData = JSON.parse(res);
            let MyArr = [];
            for (var key in jsonData) {
                MyArr.push([key, jsonData[key]['art_id'], jsonData[key]['art_date'], jsonData[key]['art_link'], jsonData[key]['art_title'], jsonData[key]['art_desc']])
            }
            console.log(MyArr);
            MyArr.map((entry, index) => {
                if(index == 0) {
                    const fixScroll: string = appStore.classFixScroll.model.find(element => 'MainPic');
                    this.list += '<div class="containerMainPic '+fixScroll+'">';
                        this.list += '<img class="mainPicArt" src='+entry[3]+' />';
                    this.list += '</div>';
                    this.list += '<div class="listArt">'; //introduce class listArt
                    this.list += '<div class="row">'; //introduce class row
                } else {
                    this.list += '<div class="article">'; //introduce class article
                        this.list += '<div class="articleImg">'; //introduce class articleImg
                            this.list += '<img class="listImg" src='+entry[3]+' />';
                            this.list += '<div class="overlay"></div>';
                        this.list += '</div>'; //Finish class articleImg
                        this.list += '<div class="articleText">'; //Introduce class articleText
                            this.list += '<div class="articleTextTitle">'+entry[4]+'</div>';
                            this.list += '<div class="articleTextText">'+entry[5]+'</div>';
                       this.list += '</div>'; //Finish class articleText
                    this.list += '</div>'; //Finish class article
                } 
            });
            this.list += '</div>'; //Finish class row
            this.list += '</div>'; //Finish class listArt
        });
        appStore._loaded = true;
        this.forceUpdate();
    }

    public render() {
        return parse(this.list);
    }
}