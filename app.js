const convertDateTimeToESTEpoch = require("./date.js");
const createCSVFile = require("./createCSV.js");
const GetInsights = require("./GetInsights.js");
const reduceContent = require("./reduceContent.js");

const dateStr1 = "2023-07-31";
const dateStr2 = "2023-07-31";
const campaign_id = "191";

const StartTime = convertDateTimeToESTEpoch(dateStr1, "00:01:00");
const EndTime = convertDateTimeToESTEpoch(dateStr2, "23:59:00");

async function test() {
  let GetInsights_resp = "";
  GetInsights_resp = await GetInsights("1", StartTime, EndTime, campaign_id);
  if (GetInsights_resp === "failed") {
    console.log("\n GetInsights_resp failed");
    return false;
  }
  var all_GetInsights_resp = [];
  all_GetInsights_resp = GetInsights_resp.content;

  if (GetInsights_resp.page > 1) {
    console.log(`This will run ${GetInsights_resp.page} times, Have patience`);
    for (let i = 2; i <= GetInsights_resp.page; i++) {
      GetInsights_resp = await GetInsights(i, StartTime, EndTime, campaign_id);
      if (GetInsights_resp === "failed") {
        console.log("\n GetInsights failed");
        return false;
      } else {
        GetInsights_resp.content.forEach((element) => {
          all_GetInsights_resp.push(element);
        });
      }
    }
  }

  let reducedArray = reduceContent(all_GetInsights_resp);
  console.log(`There are ${reducedArray.length} rows`);
  createCSVFile(reducedArray, `extractedFiles/${dateStr1}to${dateStr2}for${campaign_id}.csv`);
}

test();
