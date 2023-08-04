function reduceContent(all_GetInsights_resp) {
  let reducedArray = all_GetInsights_resp.map((item) => ({
    csn: item.user.csn,
    date: item.user.date,
    campaign_name: item.campaign.name,
    delivery_status: item.delivery_status,
    error: item.error,
  }));
  return reducedArray;
}

module.exports = reduceContent;
