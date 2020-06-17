import React from 'react';
import ReactDOM from "react-dom"
import parse from 'html-react-parser'
import { observer } from "mobx-react"
import { AppStore } from "../AppStore/AppStore"
import {action} from "mobx";


interface IProps {
    appStore: AppStore,
    type: string
}

interface IState {}

@observer export class ArtAll extends React.Component<IProps, IState>  {

    public list: string = '';
    private appStore = this.props.appStore;

    constructor(props) {
        super(props);
        this.loadData(12);
    }

    @action async loadData(page: number) {
        await this.appStore.getArts(6, page).then(res => {
            const jsonData = JSON.parse(res);
            let MyArr = [];
            let counter = 0;
            for (var key in jsonData) {
                MyArr.push([key, jsonData[key]['art_id'], jsonData[key]['art_date'], jsonData[key]['art_link'], jsonData[key]['art_title'], jsonData[key]['art_desc']])
            }
            MyArr.map((entry, index) => {
                if(index%3 == 0) {
                    this.list += '<div class="allArtRow">';
                    counter = 0;
                }
                counter++;
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
                if(counter == 3) {
                    this.list += '</div>'; //Finish class allArtRow
                }
            });
            this.list += '<div class="loadMore">';
            this.list += '<div class="btnLoadMore">More art</div>';
            this.list += '</div>';
            
        });
        this.appStore.loaded = true;
        this.forceUpdate();
    }

    componentWillUnmount(){
        this.appStore.loaded = false; 
    }

    public render() {
        return parse(this.list);
    }
}
