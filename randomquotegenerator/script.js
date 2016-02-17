  $(document).ready(function() {
          // array with all the quotes 
 var quotearray = [
     "To err is human, but to really foul things up requires a computer.",
     "Moral indignation is jealousy with a halo.",
     "If Dante knew about (insert complaint  here), he would have sketched a 10th circle of hell.",
     "Don't get mad, get even.",
     "Health is not simply the absence of sickness.",
     "A healthy person has 1000 wishes, a sick person has only 1.",
     "E,A, D, C. Now go start a band.",
     "Statistically married men live longer. Or maybe they don't, and it just seems that way.",
     "That which doesn't kill us will only try harder next time.",
     "Good friends are hard to find, but impossible to forget.",
     "A person's life is like a stone skipping over water. No matter how short it touches the surface, it leaves ripples begind.",
     "You're only truly old when the candles cost more than the cake.",
     "Ever tried, ever failed, no matter. Try again, fail again, fail better."

 ]

      var qn = "";

      $("#getQuote").on("click", function() {

          // generate a random number between 0 and the total number of quotes  
          qn = Math.floor((Math.random() * quotearray.length));
          // make the quote show up in the div with class quote...
          $(".quote").html("<blockquote>" + quotearray[qn] + "</blockquote>");
      });

      $("#tweetQuote").on("click", function tweet(url, text) {
          url = encodeURIComponent(url);
          text = quotearray[qn];
          window.open("http://twitter.com/intent/tweet?original_referer=" + url + "&text=" + text + "&url=" + url, "_blank");
      });

  });
