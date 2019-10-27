//Rotate: 0 = clockwise, 1 = anti-clockwise

/*
Front,Right,Up,Down,Left,Back
var cube_pad_conf = [
    [0,0,0,0,0,0,0,0,0],    Front Layer
    [1,1,1,1,1,1,1,1,1],    Right Layer
    [2,2,2,2,2,2,2,2,2],    Up Layer
    [3,3,3,3,3,3,3,3,3],    Down Layer
    [4,4,4,4,4,4,4,4,4],    Left Layer
    [5,5,5,5,5,5,5,5,5]];   Back Layer
*/

//daha güzel bir isim bul lütfen!!!
function side_turner(side, rotate){
    if(rotate == 0 || rotate == 1){
        var swap_pad = side[0];
        side[0] = side[6-4*rotate];
        side[6-4*rotate] = side[8];
        side[8] = side[2+4*rotate];
        side[2+4*rotate] = swap_pad;

        swap_pad = side[1];
        side[1] = side[3+2*rotate];
        side[3+2*rotate] = side[7];
        side[7] = side[5-2*rotate]
        side[5-2*rotate] = swap_pad;
        delete swap_pad;
        return side;
    }
    else{
        console.log("side_turner, Rotate Parameter Error: "+rotate);
    }
}
function turn_cube_axis_x(rotate){
    if(rotate == 0 || rotate == 1){
        var swap_surface = cube_pad_conf[0];
        cube_pad_conf[0] = cube_pad_conf[3-rotate];
        cube_pad_conf[3-rotate] = cube_pad_conf[5].reverse();
        cube_pad_conf[5] = cube_pad_conf[2+rotate].reverse();
        cube_pad_conf[2+rotate] = swap_surface;
        delete swap_surface;
        cube_pad_conf[1] = side_turner(cube_pad_conf[1], rotate);
        cube_pad_conf[4] = side_turner(cube_pad_conf[4], 1-rotate);
        refreshPadColor();
    }
    else{
        console.log("turn_cube_axis_x Rotate Parameter Error: "+rotate);
    }
}
function turn_cube_axis_y(rotate){
    if(rotate == 0 || rotate == 1){
        var swap_surface = cube_pad_conf[0];
        cube_pad_conf[0] = cube_pad_conf[1+3*rotate];
        cube_pad_conf[1+3*rotate] = cube_pad_conf[5];
        cube_pad_conf[5] = cube_pad_conf[4-3*rotate];
        cube_pad_conf[4-3*rotate] = swap_surface;
        delete swap_surface;
        cube_pad_conf[2] = side_turner(cube_pad_conf[2], rotate);
        cube_pad_conf[3] = side_turner(cube_pad_conf[3], 1-rotate);
        refreshPadColor();
    }
    else{
        console.log("turn_cube_axis_y Rotate Parameter Error: "+rotate);
    }
}
function turn_cube_axis_z(rotate){
    if(rotate == 0 || rotate == 1){
        var swap_surface = cube_pad_conf[2];
        cube_pad_conf[2] = side_turner(cube_pad_conf[4-3*rotate], 1-rotate);
        cube_pad_conf[4-3*rotate] = side_turner(cube_pad_conf[3], 1-rotate);
        cube_pad_conf[3] = side_turner(cube_pad_conf[1+3*rotate], 1-rotate);
        cube_pad_conf[1+3*rotate] = side_turner(swap_surface, 1-rotate);
        delete swap_surface;
        cube_pad_conf[0] = side_turner(cube_pad_conf[0], rotate);
        cube_pad_conf[5] = side_turner(cube_pad_conf[5], 1-rotate);
        refreshPadColor();
    }
    else{
        console.log("turn_cube_axis_y Rotate Parameter Error: "+rotate);
    }
}

function turn_front_layer(rotate){}
function turn_right_layer(rotate){}
function turn_up_layer(rotate){}
function turn_down_layer(rotate){}
function turn_left_layer(rotate){}
function turn_back_layer(rotate){}