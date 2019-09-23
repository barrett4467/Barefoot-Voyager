// news api 
$("#submit").on("click", function (event) {
    event.preventDefault();


    var location = $("#location-input").val().trim();
    var articleLimit = 5;
    var newsAPIkey = "3fe53b99010243faa5ad7667a9f9d73f";
    var newsURL = "https://newsapi.org/v2/everything?q=" + location + "&apiKey=3fe53b99010243faa5ad7667a9f9d73f&pageSize=" + articleLimit;


    $.ajax({
        url: newsURL,
        method: "GET",
    }).then(function (response) {
        var articles = response.articles;
        console.log(articles);
        var newsDiv = $("<div>");
        newsDiv.addClass("newsDiv")
        for (var i = 0; i < articles.length; i++) {
            var headline = articles[i].title;
            var byline = articles[i].author;
            var source = articles[i].source.name;
            var articlepictureURL = articles[i].urlToImage;
            var articleNumber = i+1;
            var articleUrl = articles[i].url;
            



            var articleImage = $("<img>");
            articleImage.attr("src", articlepictureURL);
            articleImage.addClass("newsImg")

            newsDiv.append("<h5 id='headline'>" + articleNumber + ") <a href='"+ articleUrl + "'>" + headline + "</a></h5>");
            newsDiv.append("<h6 id='byline'>By: " + byline + "</h6>");
            newsDiv.append("<h6 id='source'>Source: " + source + "</h6>");

            newsDiv.append(articleImage);

        };
        $(".content").html(newsDiv);
    });

});


//form validation check 

$(document).ready(function(){
    $("#location-input").on("input", function() {
        var input = $(this);
        var isText = input.val();
        input.addClass("invalid");

        if (isText){
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }

    })
    $("#date-input").on("input", function() {
        var input = $(this);
        var isDate = input.val();

        if (isDate){
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }

    })
    $("#interest-input").on("input", function() {
        var input = $(this);
        var isText = input.val();

        if (isText){
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }

    })

})
 
// remove invalid class add valid class





// $('input[name="dates"]').daterangepicker();