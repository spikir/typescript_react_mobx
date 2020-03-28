import React from 'react';
import ReactDOM from "react-dom"
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
        appStore.allArt.model.map(entry => {
           list += 'a'+entry.art_id;
        });
        return list;
    }
}