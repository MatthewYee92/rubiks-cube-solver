var color_selecting_status = false;

const listColors = (pad) => {
    var pad_index = parseInt(pad.target.id);
    if(!color_selecting_status){
        for(var i = 0; i < colors.length; i++){
            var color_div = document.createElement("div");
            color_div.style.width = "100%";
            color_div.style.height = (100/6)+"%";
            color_div.style.background = colors[i];
            color_div.addEventListener("mousedown", selectColor);
            pad.target.appendChild(color_div);
        }
        color_selecting_status = true;
    }
}

const selectColor = (pad) => {
    if(color_selecting_status){
        var selected_pad = pad.target;
        var hex = rgb2hex(selected_pad.style.background);
        var current_parent = selected_pad.parentElement;
        cube_pad_conf[0][pads.indexOf(current_parent)] = colors.indexOf(rgb2hex(selected_pad.style.background));
        current_parent.style.background = selected_pad.style.background;
        var child_count = current_parent.children.length;
        for(var child_index = 0; child_index < child_count; child_index++){
            current_parent.removeChild(current_parent.children[0]);
        }
        color_selecting_status = false;
    }
}