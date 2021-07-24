
var scroll_height = document.body.scrollHeight - 110;
var img = document.getElementById("backImage");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

$(document).ready(function() {

    $(window).on("orientationchange", function(event) {
        $(".mainDiv").css("display", "none");
        location.reload();
    });

    var scree_width = $('#map_sidth').width();
    // console.log("SW " + scree_width);
    // var scree_width = document.body.scrollWidth;  Full Screen Width
    var screen_height = window.innerHeight;

    var main_height = parseInt("1267");
    var main_image_width = parseInt("1140");

    var target_width = scree_width;
    var target_height = scree_width * main_height / main_image_width;

    // console.log("screen resolution");
    // console.log(screen_height + " height");
    // console.log(scree_width + " width");

    // console.log("image");
    // console.log(main_height + " height");
    // console.log(main_image_width + " width");

    // console.log("image");
    // console.log(target_height + " height");
    // console.log(target_width + " width");

    canvas.width = target_width;
    canvas.height = target_height;


    var img1=new Image();
    img1.onload=start;
    img1.onerror=function(){alert(img1.src+' failed to load.');};
    img1.src= img.src;
    function start(){
		ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
    }

    $(".insideDiv").each(function(index, item) {

        var img_x = parseFloat($(this).attr("data-x"));
        var img_y = parseFloat($(this).attr("data-y"));
        var canvas_width = parseFloat($(this).attr("data-image-w"));
        var canvas_height = parseFloat($(this).attr("data-image-h"));

        var img_width = parseFloat($(this).attr("data-w"));
        var img_height = parseFloat($(this).attr("data-h"));

        var img_bottom_x = img_x + img_width;
        var img_bottom_y = img_y + img_height;

        var new_top_x = img_x * target_width / canvas_width;
        var new_top_y = (img_y * target_height / canvas_height);

        var new_bottom_x = img_bottom_x * target_width / canvas_width;
        var new_bottom_y = img_bottom_y * target_height / canvas_height;

        var new_width = (new_bottom_x - new_top_x);
        var new_height = (new_bottom_y - new_top_y);

        $(this).removeClass("d-none");
        $(this).css("top", new_top_y + "px");
        $(this).css("left", new_top_x + "px");
        $(this).css("width", new_width + "px");
        $(this).css("height", new_height + "px");

        var type = $(this).attr("data-type");
        if (type == "selfie") {
            $(".seflie").css("top", new_top_y + "px");
            $(".seflie").css("left", new_top_x + "px");
            $(".seflie").css("width", new_width + "px");
            $(".seflie").css("height", new_height + "px");
        }

    });


    $('.map_box img').width(scree_width);
    $('.map_box img').height(screen_height);
});