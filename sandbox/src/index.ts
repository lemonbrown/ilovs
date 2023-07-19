import { save, schedule } from "ilovs";
import * as cheerio from "cheerio";
import axios from "axios"

let scrape : () => Promise<void> = async () => {

    const { data } = await axios.get("https://www.chiefs.com/team/stats/");

    const $ = cheerio.load(data);

    let playerNames : any[] = [];

    $(".d3-o-player-stats__player-name").each( (idx, ele) => {

        playerNames.push({name: $(ele).text().trim()});
    });

    save(playerNames, "csv", "test.csv");
}

(async () => {

    await schedule("*/10 * * * * *", scrape, "playerNames");

})();