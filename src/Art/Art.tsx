import React from 'react';
import ReactDOM from "react-dom"
import parse from 'html-react-parser'
import { observer } from "mobx-react"
import { AppStore } from "../AppStore/AppStore"


interface IProps {
    appStore: AppStore,
    type: string
}

interface IState {}

@observer export class ArtMain extends React.Component<IProps, IState>  {

    public list: string = '';

    constructor(props) {
        super(props);
        this.loadData();
    }

    async loadData() {
        const appStore = this.props.appStore;
        await appStore.getArts(6, 6).then(res => {
            const jsonData = JSON.parse(res);
            let MyArr = [];
            for (var key in jsonData) {
                MyArr.push([key, jsonData[key][this.props.type+'_id'], jsonData[key][this.props.type+'_date'], jsonData[key][this.props.type+'_link'], jsonData[key][this.props.type+'_title'], jsonData[key][this.props.type+'_desc']])
            }
            MyArr.map((entry, index) => {
                if(index == 0) {
                    this.list += '<div class="cont">'; //Begin class cont
                        this.list += '<div class="containerMainPic">';
                            this.list += '<img class="mainPicArt" src='+entry[3]+' />';
                        this.list += '</div>';
                        this.list += '<div class="listArt">'; //introduce class listArt
                        this.list += '<div class="row">'; //introduce class row
                } else {
                    if(index == 3) {
                        this.list += '<div class="row">'; //introduce class row
                    }
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
                if(index ==  2|| index == 5) {
                    this.list += '</div>'; //Finish class row
                }
                console.log(index);
            });
            this.list += '</div>'; //Finish class listArt
            this.list += '</div>'; //Finish class cont
            this.list += '<div class="artMore">';
            this.list += '<div class="btnMore">More '+this.props.type+'</div>';
            this.list += '</div>';
            
        });
        appStore.loaded = true;
        this.forceUpdate();
    }

    public render() {
        return parse(this.list);
    }
}