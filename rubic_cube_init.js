function rgb2hex(rgb){
    var rgb_struct_index = rgb.indexOf("rgb");
    if(rgb_struct_index >= 0){
        var par_open_index = rgb.indexOf("(", rgb_struct_index);
        if(par_open_index >= 0){
            var par_close_index = rgb.indexOf(")", par_open_index);
            if(par_close_index >= 0){
                var rgb_string = rgb.substring(par_open_index+1, par_close_index);
                rgb_string = rgb_string.trim();
                rgb_array = rgb_string.split(",");
                //only rgb values
                rgb_array = rgb_array.slice(0, 3);
                for(var color_index = 0; color_index < rgb_array.length; color_index++){
                    rgb_array[color_index] = parseInt(rgb_array[color_index]).toString(16);
                    if(rgb_array[color_index].length < 2){
                        rgb_array[color_index] = ("0" + rgb_array[color_index]);
                    }
                }
                return "#"+(rgb_array.join(""));
            }
        }
    }
    return false;
}
function refreshPadColor(){
    for(var i = 0; i < pads.length; i++){
        pads[i].style.background = colors[cube_pad_conf[0][i]];
        pads[i].addEventListener("click", listColors);
    }
}
function fitter(){
    height = window.innerHeight;
    width = window.innerWidth;
    if(height > width){
        diff = height - width;
        for(i = 0; i < vertical_fixers.length; i++){
            vertical_fixers[i].style.height = ((diff/2)/height*100)+"%";
            vertical_fixers[i].style.width = "100%";
            horizontal_fixers[i].style.height = (width/height*100)+"%";
            horizontal_fixers[i].style.width = "0px";
            cube.style.height = (width/height*100)+"%";
            cube.style.width = "100%"
        }
    }
    else{
        diff = width - height;
        for(i = 0; i < vertical_fixers.length; i++){
            vertical_fixers[i].style.height = "0px";
            vertical_fixers[i].style.width = "100%";
            horizontal_fixers[i].style.height = "100%";
            horizontal_fixers[i].style.width = ((diff/2)/width*100)+"%";
            cube.style.height = "100%";
            cube.style.width = (height/width*100)+"%";
        }
    }
}
function initiliaze(){
    refreshPadColor();
    fitter();
}

initiliaze();