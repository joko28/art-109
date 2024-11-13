// Basic Three.JS scene from documentation, importing Three.JS through a CDN
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

//~~~~~~~ Import Three.js (also linked to as import map in HTML) ~~~~~~
import * as THREE from "three";

// Import add-ons
import { OrbitControls } from "https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js"; // to load 3d models

// ~~~~~~~~~~~~~~~~ Declare Global Variables ~~~~~~~~~~~~~~~~
let scene, camera, renderer, octahedron, torus;

// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~

function init() {
  // ------------- Set up scene, camera, + renderer -------------

  scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(1, 2, 5);
  scene.add(light);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
  const controls = new OrbitControls(camera, renderer.domElement);
  const loader = new GLTFLoader(); // to load 3d models

  loader.load("assets/PROJECT3.gltf", function (gltf) {
    const project = gltf.scene;
    scene.add(project);
    project.scale.set(3, 3, 3);
    project.translateY(16);
  });

  // →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

  // ~~~~~~~~~~~~~~~~ Create Geometry ~~~~~~~~~~~~~~~~

  const geometry_1 = new THREE.OctahedronGeometry(3);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const texture_1 = new THREE.TextureLoader().load("textures/lavatile.jpg");
  const material_1 = new THREE.MeshBasicMaterial({ map: texture_1 });
  octahedron = new THREE.Mesh(geometry_1, material_1);

  const geometry_2 = new THREE.TorusKnotGeometry(10, 3, 100, 10);
  const texture_2 = new THREE.TextureLoader().load("textures/decal-normal.jpg");
  const material_2 = new THREE.MeshBasicMaterial({ map: texture_2 });
  torus = new THREE.Mesh(geometry_2, material_2);

  scene.add(octahedron);
  scene.add(torus);

  // ------------- Camera -------------

  camera.position.z = 5;
}

// ~~~~~~~~~~~~~~~~ Animation ~~~~~~~~~~~~~~~~

function animate() {
  octahedron.rotation.x += 0.002;
  octahedron.rotation.y += 0.002;

  torus.rotation.x -= 0.002;
  torus.rotation.y -= 0.002;
  renderer.render(scene, camera);
}

// ~~~~~~~~~~~~~~~~ Window Resize ~~~~~~~~~~~~~~~~

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate(); // execute animation function
