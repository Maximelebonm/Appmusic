import { BaseModel } from "./baseModel.model.js";

export class PlayerGuitare extends BaseModel{

    constructor(props){
        super(props);
        this.assign(props);
    }

    title = "";
    description = "";

}