'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin')
try { admin.initializeApp() } catch (e) { }
const BitlyClient = require('bitly');
// TODO: Make sure to set the bitly.access_token cloud functions config using the CLI.
const bitly = BitlyClient(functions.config().bitly.access_token);

// Shorten URL written to /links/{linkID}.
exports.shortenUrl = functions.database.ref('/links/{linkID}').onCreate((snap) => {
  const originalUrl = snap.val();
  return bitly.shorten(originalUrl).then((response) => {
    return snap.ref.set({
      original: originalUrl,
      short: response.data.url,
    })
  });
});