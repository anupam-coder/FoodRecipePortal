import { Stores } from '../shared/Stores.model';

export class localStore{
    public name: string;
    public description: string;
    public imagePath: string;
    public Stores: Stores[];

    constructor(name: string, desc: string, imagePath: string, Stores: Stores[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Stores = Stores;
      }
}