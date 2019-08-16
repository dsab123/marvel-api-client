import md5 from 'md5';

import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import { runInThisContext } from 'vm';

@inject(HttpClient)
export class Api {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.timestamp = new Date().getTime();
        this.privateKey = 'f327b3248c27276e32ece2257be629a6c8ec296f'; // should be in config
        this.publicKey = '6636973553304160f231ab0bd37b6749'; // should be in config
        
        this.httpClient.configure(config => {
            config
              .withBaseUrl('https://gateway.marvel.com/v1/public/')
              .withDefaults({
                mode: 'cors',
                headers: {
                    'Accept': '*/*'
                }
              })
            });
    }

    computeHash() {
        return md5(this.timestamp + this.privateKey + this.publicKey);
    }

    generateTimestamp() {
        this.timestamp = new Date().getTime();
    }

    async getCharacters(characters) {
        this.generateTimestamp();

        let response = await this.httpClient.fetch(`characters?name=${characters}&` +
        `orderBy=name&` + 
        `apikey=6636973553304160f231ab0bd37b6749&` + 
        `ts=${this.timestamp}&` + 
        `hash=${this.computeHash()}`);

        return response.json();
    }
}