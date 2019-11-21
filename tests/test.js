const search = require("../src/search.js");
const test = require("tape");

test("Tape is working", function(t) {
  t.equal(1, 1, "Tape should work");
  t.end();
});

test("Find matching names from color-names.json file", function(t) {
  let actual = Object.keys(search("aq"));
  let expected = ["aqua", "aquamarine"];
  t.deepEquals(actual, expected, 'Searching "aq" should return 2 results');
  t.end();
});

test("Find matching names, including searching words internally", function(t) {
  let actual = Object.keys(search("que"));
  let expected = ["antiquewhite", "bisque"];
  t.deepEquals(actual, expected, 'Searching "que" should return 2 results');
  t.end();
});

test("Search function doesn't return more than 5 results", function(t) {
  let actual = Object.keys(search("blu")).length;
  let expected = 10;
  t.equals(actual, expected, 'Searching "blu" should return only 10 results');
  t.end();
});

test("Search function should return an object", function(t) {
  let actual = typeof search("dark");
  let expected = "object";
  t.equals(actual, expected, 'Searching "dark" should return an object');
  t.end();
});
