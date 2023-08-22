function convertTimestampToReadable(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

// const timestamp = 1688907302;
// const readableDate = convertTimestampToReadable(timestamp);
// console.log(readableDate);

function reduceContent(all_GetInsights_resp) {
  let reducedArray = all_GetInsights_resp.map((item) => ({
    csn: item.user.csn,
    // date: item.user.date, execution
    date: convertTimestampToReadable(item.execution.created_at),
    campaign_name: item.campaign.name,
    delivery_status: item.delivery_status,
    error: item.error,
  }));
  return reducedArray;
}

module.exports = reduceContent;
