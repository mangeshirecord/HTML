
var scroll_height_2 = document.body.scrollHeight - 110;
var img_uae = document.getElementById("backImage_uae");
var canvas_uae = document.getElementById('canvas_uae');
var ctx_uae = canvas_uae.getContext('2d');

$(document).ready(function() {

    $(window).on("orientationchange", function(event) {
        $(".mainDiv").css("display", "none");
        location.reload();
    });

    var scree_width_uae = $('.map_tabs_2 .tab-content').width();
    console.log("SW " + scree_width_uae);
    var screen_height_uae = window.innerHeight;

    var main_height_uae = parseInt("1058");
    var main_image_width_uae = parseInt("950");

    var target_width_uae = scree_width_uae;
    var target_height_uae = scree_width_uae * main_height_uae / main_image_width_uae;

    console.log("screen resolution");
    console.log(screen_height_uae + " height");
    console.log(scree_width_uae + " width");

    console.log("image");
    console.log(main_height_uae + " height");
    console.log(main_image_width_uae + " width");

    console.log("image");
    console.log(target_height_uae + " height");
    console.log(target_width_uae + " width");

    canvas_uae.width = target_width_uae;
    canvas_uae.height = target_height_uae;


    var img1_uae = new Image();
    img1_uae.onload=start_img;
    img1_uae.onerror = function(){
        alert(img1_uae.src+' failed to load.');
    };
    img1_uae.src= img_uae.src;
    function start_img(){
		ctx_uae.imageSmoothingEnabled = true;
        ctx_uae.drawImage(img_uae, 0, 0, img_uae.width, img_uae.height, 0, 0, canvas_uae.width, canvas_uae.height);
    }

    $(".insideDiv_2").each(function(index, item) {

        var img_x_uae = parseFloat($(this).attr("data-x"));
        var img_y_uae = parseFloat($(this).attr("data-y"));
        var canvas_width_uae = parseFloat($(this).attr("data-image-w"));
        var canvas_height_uae = parseFloat($(this).attr("data-image-h"));

        var img_width_uae = parseFloat($(this).attr("data-w"));
        var img_height_uae = parseFloat($(this).attr("data-h"));

        var img_bottom_x_uae = img_x_uae + img_width_uae;
        var img_bottom_y_uae = img_y_uae + img_height_uae;

        var new_top_x_uae = img_x_uae * target_width_uae / canvas_width_uae;
        var new_top_y_uae = (img_y_uae * target_height_uae / canvas_height_uae);

        var new_bottom_x_uae = img_bottom_x_uae * target_width_uae / canvas_width_uae;
        var new_bottom_y_uae = img_bottom_y_uae * target_height_uae / canvas_height_uae;

        var new_width_uae = (new_bottom_x_uae - new_top_x_uae);
        var new_height_uae = (new_bottom_y_uae - new_top_y_uae);

        $(this).removeClass("d-none");
        $(this).css("top", new_top_y_uae + "px");
        $(this).css("left", new_top_x_uae + "px");
        $(this).css("width", new_width_uae + "px");
        $(this).css("height", new_height_uae + "px");

        var type = $(this).attr("data-type");
        if (type == "video_player") {
            $(".seflie").css("top", new_top_y_uae + "px");
            $(".seflie").css("left", new_top_x_uae + "px");
            $(".seflie").css("width", new_width_uae + "px");
            $(".seflie").css("height", new_height_uae + "px");
        }

    });


    $('.map_box img').width(scree_width_uae);
    $('.map_box img').height(screen_height_uae);
});