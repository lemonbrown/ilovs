import * as fastq from "fastq";
import type { queueAsPromised } from "fastq";

type Task = {
    data: any,
    callback: Function
  }

const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 1)

async function asyncWorker (arg: Task): Promise<void> {

    arg.callback(arg.data);
}

export function send(data: any, callback: Function){

    q.push({ data: data, callback: callback}).catch((err) => console.error(err))
}