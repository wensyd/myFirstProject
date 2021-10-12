const URL =
  "https://cdn.contentful.com/spaces/3urg0g8lvz2m/environments/master/entries?access_token=5fCMzS4lyRQ3uBEj09lmGbjFOj8lRd3Y1brf9FzcI2M&content_type=triviaQ";
$.ajax(URL).then((data) => {
  console.log(data);
});
