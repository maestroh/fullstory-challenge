const isProd = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: isProd ? "http://nael.io/fullstory-challenge" : "",
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "fullstory-challenge/about": { page: "/about" },
      "fullstory-challenge/magic": { page: "/magic" }
    };
  }
};
