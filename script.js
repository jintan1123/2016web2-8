onload = function(){
        var canvas = document.getElementById('canvas');
        canvas.width = 500;
        canvas.height = 300;
  
        var gl =canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        var v_shader = create_shader('vs');
        var f_shader = create_shader('fs');
        
        var prg = create_program(v_shader,f_shader);
        
        var sttLocation = new Array(2);
        attLocation[0] = gl.getAttribLocation(prg, 'position');
        attLocation[1] = gl.getAttribLocation(prg, 'color');
        
        var attStride[0] = 3;
        var attStride[1] = 4;
        
        var position = [
                0.0, 1.0, 0.0,
                1.0, 0.0, 0.0,
               -1.0, 0.0, 0.0
        ];
        
        var color = [
                1.0, 0.0, 0.0, 1.0,
                0.0, 1.0, 0.0, 1.0,
                0.0, 0.0, 1.0, 1.0
        ];
        
        var pos_vbo = create_vbo(position);
        var col_vbo = create_vbo(color);
        
        set_attribute([pos_vbo, col_vbo], attLocation, attStride);
  
        gl.clearColor(0.0,0.0,0.0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        var uniLocation = gl.getUniformLocation(prg, 'mvpMatrix');
        
        
};
