import { Optional } from "@angular/core";

export interface Content {
    id? : number;
    title : string;
    body? : string;
    author : string;
    imagelink? : string;
    type?: string;
    hashtags: string[];


}

