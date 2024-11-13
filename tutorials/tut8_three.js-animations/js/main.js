// Basic Three.JS scene from documentation, importing Three.JS through a CDN
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

// ------ Import Three.js (also linked to as import map in HTML) ------

import * as THREE from "three";

// -------------------------- Import add-ons --------------------------

import { OrbitControls } from "https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js"; // to load 3d models

// --------------------- Declare Global Variables ---------------------

let scene, camera, renderer, octahedron, torus;
let sceneContainer = document.querySelector("#scene-container");

// --------------------- Initialize Scene in init() -------------------

function init() {
  // -- Set up scene, camera, + renderer --

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    sceneContainer.clientWidth / sceneContainer.clientHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
  renderer.setAnimationLoop(animate);
  sceneContainer.appendChild(renderer.domElement);

  // -------------- Light ---------------

  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(1, 2, 5);
  scene.add(light);

  // ----------------------- Initiate add-ons ------------------------

  const controls = new OrbitControls(camera, renderer.domElement);
  const loader = new GLTFLoader(); // to load 3d models

  loader.load("assets/wolf.gltf", function (gltf) {
    const wolf = gltf.scene;
    scene.add(wolf);
    wolf.scale.set(2, 2, 2);
    wolf.translateY(6);
  });

  // →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

  // ------------------------ Create Geometry ------------------------

  // ------------ Octachedron ------------

  const geometry_1 = new THREE.OctahedronGeometry(3);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const texture_1 = new THREE.TextureLoader().load("textures/lavatile.jpg");
  const material_1 = new THREE.MeshBasicMaterial({ map: texture_1 });
  octahedron = new THREE.Mesh(geometry_1, material_1);
  scene.add(octahedron);

  // ------------- TorusKnot -------------

  const geometry_2 = new THREE.TorusKnotGeometry(10, 3, 100, 10);
  const texture_2 = new THREE.TextureLoader().load("textures/decal-normal.jpg");
  const material_2 = new THREE.MeshBasicMaterial({ map: texture_2 });
  torus = new THREE.Mesh(geometry_2, material_2);
  scene.add(torus);

  // --------- Position Camera -----------

  camera.position.z = 35;
}

// ------------------------ Animation Loop --------------------------

// (similar to draw loop in p5.js, updates every frame)

function animate() {
  requestAnimationFrame(animate); // start loop by with frame update

  // ------ add your animation here ------

  octahedron.rotation.x += 0.0001;
  octahedron.rotation.y += 0.0001;

  torus.rotation.x -= 0.0002;
  torus.rotation.y -= 0.0002;

  // camera.position.z += 0.025;
  // always end animation loop with renderer
  renderer.render(scene, camera);
}

// -------------------------- Window Resize -------------------------

function onWindowResize() {
  camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener("resize", onWindowResize, false);

init(); //execute initialize funtion
animate(); // execute animation function
