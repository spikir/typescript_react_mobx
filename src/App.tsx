import React from 'react'
import { ArtMain } from './Art/Art'
import { ArtAll } from './Art/ArtAll'
import  Header from './inc/Header'
import  HeaderMore from './inc/HeaderMore'
import  Footer from './inc/Footer'
import { AppStore } from "./AppStore/AppStore"
import './css/App.css'
import { observer } from "mobx-react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const appStore = new AppStore();


interface IProps {
}

interface IState {
  height: number,
}

@observer export default class App extends React.Component<IProps, IState>  {

  render() {
      return(
        <div className="container">
        <Router>
            <Switch>
            <Route exact path="/">
              <Header />
              <div className="loading" style={{visibility: appStore.loaded ? 'hidden': 'visible'}}>
                <div className="loadingContent">
                  <img src="https://i.gifer.com/YCZH.gif" />
                </div>
              </div>
              <div id="art" className="catTitle">
                <div className="catTitleDiv">
                  <h2>Art</h2>
                </div>
              </div>
              <div id="container-art-main" className="containerMain">
                <ArtMain appStore={appStore} type="art" />
              </div>
              <div id="mode" className="catTitle">
                <div className="catTitleDiv">
                  <h2>Mode</h2>
                </div>
              </div>
              <div className="containerMain">
              </div>
              <div id="photography" className="catTitle">
                <div className="catTitleDiv">
                  <h2>Photography</h2>
                </div>
              </div>
              <div className="containerMain">
              </div>
              <div id="film" className="catTitle">
                <div className="catTitleDiv">
                  <h2>Film</h2>
                </div>
              </div>
              <div className="containerMain">
              </div>
            </Route>
            <Route exact path="/art">
            <HeaderMore />
              <div className="loading" style={{visibility: appStore.loaded ? 'hidden': 'visible'}}>
                <div className="loadingContent">
                  <img src="https://i.gifer.com/YCZH.gif" />
                </div>
              </div>
              <ArtAll appStore={appStore} type="art" />
            </Route>
          </Switch>
      </Router>
      <Footer />
      </div>
    );
  }
}

