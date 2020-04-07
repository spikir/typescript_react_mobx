import React from 'react'
import { Art992 } from './992px/Art'
import { AppStore } from "./AppStore/AppStore"
import './css/App.css'
import { observer } from "mobx-react"

const appStore = new AppStore();

@observer export default class App extends React.Component {

  render() {
    console.log(appStore._loaded);
      return(
        <div className="container">
          <div className="loading" style={{visibility: appStore._loaded ? 'hidden': 'visible'}}>
            <div className="loadingContent">
              <img src="https://i.gifer.com/YCZH.gif" />
            </div>
         </div>
          <div id="art" className="catTitle">
            <div className="catTitleDiv">
              <h2>Art</h2>
            </div>
          </div>
          <div className="containerMain">
            <Art992 appStore={appStore}/>
          </div>
          <div id="mode" className="catTitle">
            <div className="catTitleDiv">
              <h2>Mode</h2>
            </div>
          </div>
          <div className="containerMain">
            <Art992 appStore={appStore}/>
          </div>
          <div id="photography" className="catTitle">
            <div className="catTitleDiv">
              <h2>Photography</h2>
            </div>
          </div>
          <div className="containerMain">
            <Art992 appStore={appStore}/>
          </div>
          <div id="movie" className="catTitle">
            <div className="catTitleDiv">
              <h2>Movie</h2>
            </div>
          </div>
          <div className="containerMain">
            <Art992 appStore={appStore}/>
          </div>
        </div>
        );
  }
}

