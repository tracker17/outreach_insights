const GetInsights = async (page, StartTime, EndTime, campaign_id) => {
  let url = `https://h1.avaamo.com/api/v2/campaigns/insights?page=${page}&per_page=100&start_time=${StartTime}&end_time=${EndTime}&campaign_id=${campaign_id}`;
  let args = {
      method: "GET",
      headers: {
        "Access-Token": "262f1f3686774c2f9cea64dcb068afc2",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    },
    jsonResponse = await fetch(url, args)
      .then((res) => {
        // console.log("\n updateAttributes res :",res)
        console.log("GetInsights res.status :", res.status);
        if (res.status == 200) {
          return res.json();
        } else return "failed";
      })
      .then((json) => {
        // console.log("\n GetFiles Response : \n", json);
        if (json === "failed") return "failed";
        // else return json.files;
        else
          return {
            page: json.total_pages,
            content: json.entries,
          };
      })
      .catch((err) => {
        console.log("\nError", err);
        return "failed";
      });
  // console.log("\n jsonResponse: ", jsonResponse);
  return jsonResponse;
};

module.exports = GetInsights;
