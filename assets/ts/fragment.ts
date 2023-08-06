var fragment_default = `
varying vec3 v_color;

void main() {
    gl_FragColor = vec4(v_color,1);
}`;

export {
  fragment_default as default
};
