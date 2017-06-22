function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

function markdonwOptions() {
  return {
    "theme": findGetParameter("theme") || "black",
    "markdown": "https://rawgit.com/" + findGetParameter("markdown").replace(/^\//, ""),
    "separator": findGetParameter("separator") || "^\n---\n$",
    "separator-vertical": findGetParameter("separator-vertical") || "\n--\n",
    "separator-notes": findGetParameter("separator-notes") || "^Note:"
  };
}
