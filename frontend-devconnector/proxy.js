var HttpsProxyAgent = require("https-proxy-agent");
var proxyConfig = [
  {
    context: "/api",
    // target: 'http://qause.online:3000',
    // target: 'http://15.206.79.59:5000',
    // target: 'https://qause.tech',
    target: "http://localhost:5000",
    secure: false,
  },
];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    proxyConfig.forEach(function (entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
