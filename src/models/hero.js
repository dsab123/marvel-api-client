
export class Hero {
    constructor(data = {}) {
        this.id = 0; // an id of -1 is essentially an error object
        this.name = '';
        this.description = '';
        this.headshot = ''
        
        Object.assign(this, data);
    }

}