// const projectName = 'random-quote-machine';
// let quotesData;

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857'
// ];
// var currentQuote = '',
//   currentAuthor = '';

// // // check if a character is a Japanese character using the unicode character ranges
// // function isJP(ch) {
// //     return (ch >= "\u4e00" && ch <= "\u9faf") ||
// // 	(ch >= "\u3400" && ch <= "\u4dbf") || (ch >= "\u3040" && ch <= "\u309f") ||
// // 	(ch >= "\u30a0" && ch <= "\u30ff");
// // }
// // function some(str, callback) {
// //     return Array.prototype.some.call(str, callback);
// // }
// // // checks if a string contains a Japanese character
// // function hasJP(str) {
// //     return some(str, isJP);
// // }
// // function basicParser(str, condition) {
// //     let result = [];

// //     for (let i = 0; i < str.length; ++i) {
// //         if (condition(str[i])) {
// //             result.push(str[i]);
// //         }
// //     }

// //     return result;
// // }
// // function parseJP(str) {
// //     return basicParser(str, isJP);
// // }
// function getQuotes() {
//   return $.ajax({
//     headers: {
//       Accept: 'application/json'
//     },
//     url:
//       'https://gist.githubusercontent.com/Glanfaloth/bcaf373a3702adf3b4afd40f9e9a9a2e/raw/adc96cdd1a34c7f79d7496c2fbdceaedbee2286d/jojoquotes.json',
//     success: function (jsonQuotes) {
//       if (typeof jsonQuotes === 'string') {
//         quotesData = JSON.parse(jsonQuotes);
//         console.log('quotesData');
//         console.log(quotesData);
//       }
//     }
//   });
// }

// function getRandomQuote() {
//   return quotesData.quotes[
//     Math.floor(Math.random() * quotesData.quotes.length)
//   ];
// }

// function getQuote() {
//   let randomQuote = getRandomQuote();

//   currentQuote = randomQuote.quote;
//   currentAuthor = randomQuote.author;

//   $('#tweet-quote').attr(
//     'href',
//     'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
//       encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
//   );

//   $('#tumblr-quote').attr(
//     'href',
//     'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
//       encodeURIComponent(currentAuthor) +
//       '&content=' +
//       encodeURIComponent(currentQuote) +
//       '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
//   );

//   $('.quote-text').animate({ opacity: 0 }, 500, function () {
//     $(this).animate({ opacity: 1 }, 500);
//     $('#text').text(randomQuote.quote);
//   });

//   $('.quote-author').animate({ opacity: 0 }, 500, function () {
//     $(this).animate({ opacity: 1 }, 500);
//     $('#author').html(randomQuote.author);
//   });

//   var color = Math.floor(Math.random() * colors.length);
//   $('html body').animate(
//     {
//       backgroundColor: colors[color],
//       color: colors[color]
//     },
//     1000
//   );
//   $('.button').animate(
//     {
//       backgroundColor: colors[color]
//     },
//     1000
//   );
// }

// $(document).ready(function () {
//   getQuotes().then(() => {
//     getQuote();
//   });

//   $('#new-quote').on('click', getQuote);
// });

const projectName = 'random-quote-machine';
let quotesData;

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
var currentQuote = '',
  currentAuthor = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://raw.githubusercontent.com/Glanfaloth/Glanfaloth.github.io/master/projects/freecodecamp/randomquote/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

function getRandomQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );

  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});