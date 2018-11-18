$(function() {
    $(".devour").on("click" , function (event) {
        var id = $(this).data("id");

        var newDevour = {
            devour: true
        };

        $.ajax("/api/burgers" + id , {
            type: "PUT",
            data: newDevour
        }).then( function () {
            console.log("That burger has been devoured");
            location.reload();
        })
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurg = {
            burger_name : $("#BN").val().trim(),
            devour : false
        };

        $.ajax("api/burgers" , {
            type : "POST",
            data : newBurg
        }).then( function () {
            console.log("New burger reay to be eaten");
            location.reload();
        });
    });

});