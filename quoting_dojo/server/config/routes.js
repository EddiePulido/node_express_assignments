
const quotes = require("../controllers/quotes.js")

module.exports = function(app){
    app.get("/", function(request, response) {
        quotes.index(request,response);

    })
   

    app.get("/quotes", function(request, response){
        quotes.showQuotes(request, response);
    })


    app.post("/quotes",function(request,response){
        quotes.makeQuote(request,response);
    })
}