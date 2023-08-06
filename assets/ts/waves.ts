import * as THREE from "three";

import vertex from "./vertex";
import fragment from "./fragment";

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(0, 1, 1, 0, -1000, 1000);

const canvasElem = document.getElementById("herocanvas");

const renderer = new THREE.WebGLRenderer({ canvas: canvasElem });

let geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    width: { value: 1 },
    height: { value: 1 },
  },
  vertexShader: vertex,
  fragmentShader: fragment,
  // wireframe: true,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

const canvasResized = (width: number, height: number) => {
  renderer.setSize(width, height, false);
  // geometry.scale(width,height,1);
  const widthSegments = Math.ceil(width * 0.3);
  const heightSegments = Math.ceil(height * 0.6);

  geometry = new THREE.PlaneGeometry(
    width,
    height,
    widthSegments,
    heightSegments
  );
  plane.geometry = geometry;

  material.uniforms.width.value = width;
  material.uniforms.height.value = height;
  camera.left = -width / 2;
  camera.right = width / 2;
  camera.bottom = -height / 2;
  camera.top = height / 2;
  camera.updateProjectionMatrix();
};

const resize = () => {
  // Retrieve the canvas element
  const canvas = renderer.domElement;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    canvasResized(width, height);
  }
};

const animate = () => {
  resize();
  material.uniforms.time.value += 0.001;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
