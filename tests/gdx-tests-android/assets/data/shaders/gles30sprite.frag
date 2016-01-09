#version 300 es

precision mediump float;

in vec4 v_color;
in vec2 v_texCoords;

out vec4 gl_FragColor;

uniform sampler2D u_texture;

void main () {
    gl_FragColor = v_color * texture(u_texture, v_texCoords);
}