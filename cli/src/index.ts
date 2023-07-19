#!/usr/bin/env node
import { asCsv } from "./lib/asCsv";
import * as fs from "fs";

export function save(data: any, type: string, outputFile: string){


    let stringData = "";

    if(type == "csv"){

        stringData = asCsv(data);
    }

    if(type == "json"){

        stringData = JSON.stringify(data);
    }
    
    if(outputFile){

        fs.writeFileSync(outputFile, stringData);
    }
}