//Create a function that takes a valid user-agent string for Google Chrome, 
//Mozilla Firefox, or Internet Explorer. Return the matching browser name 
//exactly as shown in the examples.

// Examples
// detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 



function getBrowserName(userAgent) {
  if (/Firefox\/[\d.]+/i.test(userAgent)) {
    return "Firefox";
  }

  if (
    /MSIE [\d.]+/i.test(userAgent) ||
    /Trident.*rv:[\d.]+/i.test(userAgent)
  ) {
    return "Internet Explorer";
  }

  if (
    /Chrome\/[\d.]+/i.test(userAgent) &&
    !/Edg\/[\d.]+/i.test(userAgent)
  ) {
    return "Google Chrome";
  }

  return "Unknown";
}

console.log(
  getBrowserName(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
  )
);