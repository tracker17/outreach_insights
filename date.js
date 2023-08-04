function convertDateTimeToESTEpoch(dateStr, timeStr) {
  const dateTimeStr = dateStr + "T" + timeStr + "Z";
  const dateTime = new Date(dateTimeStr);
  dateTime.setUTCHours(dateTime.getUTCHours() - 5); // Convert to EST (UTC-5)
  const epochTimeInSeconds = Math.floor(dateTime.getTime() / 1000);
  return epochTimeInSeconds;
}

module.exports = convertDateTimeToESTEpoch;
