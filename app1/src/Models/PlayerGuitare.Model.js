import { BaseModel } from "./BaseModel.models.js";

export class PlayerGuitare extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
        this.hasMany("accord");
    }

    title = "";
    description = "";
    image=""

};