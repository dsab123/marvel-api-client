import {bindable, inject} from 'aurelia-framework';
import {Api} from '../../api/api';

import {Hero} from '../../models/hero';

@inject(Api)
export class Search {
    @bindable content = 'hulk';
    @bindable currentHero = null;

    constructor(api) {
        this.api = api;     
    }

    async performSearch() {
        try {
            let result = await this.api.getCharacters(this.content);
            let data = result.data.results[0];

            this.currentHero = new Hero(
            {
                id: data.id,
                thumbnail: data.thumbnail.path + '.jpg',
                name: data.name,
                description: data.description
            });

        } catch(err) {
            console.log(err);
        }
    }
}