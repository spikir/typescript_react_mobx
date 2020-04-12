import {computed, observable, action} from "mobx";
import * as firebase from 'firebase';

export class AppStore {
    
    public config = {
        apiKey: "AIzaSyCNuIMRMtnfpYE-P2dwRt5cM0pW8QKUhxA",
        authDomain: "nadege-9b1e3.firebaseapp.com",
        databaseURL: "https://nadege-9b1e3.firebaseio.com",
        projectId: "nadege-9b1e3",
        storageBucket: "nadege-9b1e3.appspot.com",
        messagingSenderId: "305062983572",
        appId: "1:305062983572:web:f9c0227caf68564b314181"
    }
    
    constructor() {
        firebase.initializeApp(this.config);
    }

    @observable public feed: string;

    @observable classFixScroll = {
        model: []
    };

    @observable public _loaded: Boolean = false;


    set loaded(value) {
        this._loaded = value;
        console.log(this._loaded);
    }

    @action async firstSixArt() {
        const db = firebase.firestore();
        let feed: string = '[';
        await db.collection("art").orderBy('art_id', 'desc').get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                feed += JSON.stringify(doc.data());
                feed += '\n';
            });  
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        feed = feed.replace(/[^,{[](?=\n *["[{\d])/gm, '$&,');
        feed += ']';
        return feed;
    }
    
}