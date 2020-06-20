import React from 'react';
import ReactDOM from "react-dom"
import parse from 'html-react-parser'
import { observer } from "mobx-react"
import { AppStore } from "../AppStore/AppStore"
import { Link } from 'react-router-dom';
import  MainArticle from './MainArticle'
import  Article from './Article'


interface IProps {
    appStore: AppStore,
    type: string
}

interface IState {}

@observer export class ArtMain extends React.Component<IProps, IState>  {

    public list = [];
    private appStore = this.props.appStore;

    constructor(props) {
        super(props);
        this.loadData();
    }

    async loadData() {
        await this.appStore.getArts(6, 6).then(res => {
            const jsonData = JSON.parse(res);
            var MyArr = [[],[]];
            let i = 0;
            let counter = 0;
            let rows = [];
            for (var key in jsonData) {
                if(i == 0) {
                    MyArr[i].push([key, jsonData[key][this.props.type+'_id'], jsonData[key][this.props.type+'_date'], jsonData[key][this.props.type+'_link'], jsonData[key][this.props.type+'_title'], jsonData[key][this.props.type+'_desc']])
                    i++;
                } else {
                    if(counter == 2) {
                        i++;
                        counter = 0;
                        MyArr.push([]);
                    }
                    MyArr[i].push([key, jsonData[key][this.props.type+'_id'], jsonData[key][this.props.type+'_date'], jsonData[key][this.props.type+'_link'], jsonData[key][this.props.type+'_title'], jsonData[key][this.props.type+'_desc']])
                    counter++;
                }
            }
            MyArr.forEach((entry, i) =>{
                if(i==0) {
                    this.list.push(
                        <MainArticle key={entry[0][1]} picLink={entry[0][3]} picTitle={entry[0][4]} />
                    )
                } else {
                    rows.push(
                        <div className="row">
                            {entry.map((article, index) => {
                            return <Article key={article[1]} picLink={article[3]} picTitle={article[4]} picText={article[5]} />
                            })}
                        </div>
                    );
                }                
            });
            this.list.push(
                <div className="listArt">
                    {rows}
                </div>
            );
        });
        this.appStore.loaded = true;
        this.forceUpdate();
    }

    componentWillUnmount(){
        this.appStore.loaded = false; 
    }

    public render() {
        console.log(this.props.type);
        return (
            <React.Fragment>
                <div className="cont">
                    {this.list}
                </div>
                <div className="artMore">
                <Link to={'/'+this.props.type}>
                    <div className="btnMore">More {this.props.type}</div>
                </Link>
                </div>
            </React.Fragment>
        );
    }
}