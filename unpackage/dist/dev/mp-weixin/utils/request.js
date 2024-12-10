"use strict";
const common_vendor = require("../common/vendor.js");
const mockBaseURL = "/mock";
const request = (url, method = "GET", data = {}, options = {}) => {
  const baseURL = mockBaseURL;
  const fullURL = `${baseURL}${url}`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": options.token ? `Bearer ${options.token}` : "",
    ...options.headers
  };
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: fullURL,
      method,
      data,
      header: headers,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
