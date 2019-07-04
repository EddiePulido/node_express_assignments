const person = require("./../controllers/people.js");

module.exports = function(app){
    app.get("/", function(request, response){
        person.index(request,response);
    })

    app.get("/new/:name", function(request,response){
        person.addName(request,response);
    })

    app.get("/remove/:name", function(request, response){
        person.removeName(request,response);
    })
    app.get("/:name", function(request, response){
        person.getName(request,response);
    })
}