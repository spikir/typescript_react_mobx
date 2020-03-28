import {computed, observable} from "mobx";

export class AppStore {
    @observable arrArt = {
        model: []
    };

    public get allArt() {
        fetch('https://meningococcal-distr.000webhostapp.com/nadege/lists.php?page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.arrArt.model = responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
        return this.arrArt;
    }

    
}