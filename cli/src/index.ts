#!/usr/bin/env node
import { asCsv } from "./lib/asCsv";
import * as fs from "fs";
import { send } from "./lib/messageBus"
import cron from "node-cron"

export async function schedule(cronSchedule: string, scrape?: Function, name?: string){

    if(name){

        
    }
    
    if(scrape){

        cron.schedule(cronSchedule, async () => await scrape());
    }
}

export function save(data: any, type: string, outputFile: string, callback?: Function){

    let stringData = "";

    if(type == "csv"){

        stringData = asCsv(data);
    }

    if(type == "json"){

        stringData = JSON.stringify(data);
    }
    
    if(outputFile){

        //fs.writeFileSync(outputFile, stringData);
    }

    if(callback){

        send(stringData, callback);
    }
}