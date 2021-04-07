$(".agregar").click(function (e) {
    e.preventDefault();
    var newTxt = $("#newText").val();

    $("ul").append("<li> <div>" + newTxt + " </div><button type=submit class=check> Check</button> <button type=submit class=delete>Delete</button>");
});

$(document).on("click", "button.check", function(e){
    e.preventDefault();
    $(this).parent().children(":first").addClass("listCheck");
});

$(document).on("click", "button.delete", function(e){
    e.preventDefault();
    $(this).parent().remove();
});


