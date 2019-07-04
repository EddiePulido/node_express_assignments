const owl = require("./../controllers/owls.js");

module.exports = function(app){
    app.get("/", function(request, response) {
        owl.index(request,response);
    })

    app.get("/owls/new",function(request,response){
        owl.newOwl(request, response);
    })

    app.get("/owls/:id",function(request, response){
        owl.oneOwl(request,response);
    })

    app.post("/owls",function(request,response){
        owl.saveOwl(request,response);
    })

    app.get("/owls/edit/:id",function(request,response){
        owl.editOwlPage(request,response);
    })

    app.post("/owls/:id",function(request,response){
        owl.editOwl(request,response);
    })

    app.get("/owls/destroy/:id",function(request,response){
        owl.destroy(request,response);
    })

}