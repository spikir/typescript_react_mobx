import React from 'react'
import { Art992 } from './992px/Art'
import { AppStore } from "./AppStore/AppStore"
import './css/App.css';

const appStore = new AppStore();

export default class App extends React.Component {
  public width: number; 
  public height: number;

  constructor(props) {
    super(props);
    
    this.width = window.innerWidth;
		this.height = window.innerHeight;
  }
  
  render() {
      return(
      <div className="container">
        <div id="kunst" className="catTitle">
          <div className="catTitleDiv">
            <h2>Kunst</h2>
          </div>
        </div>
        <div className="containerMain">
          <Art992 appStore={appStore}/>
        </div>
      </div>
      );
  }
}

