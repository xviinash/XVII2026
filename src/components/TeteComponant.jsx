import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const Tete = () => {

    const refContainer = useRef(null);
    const initScale = 4.9;

    useEffect(() => {
        let map = document.querySelector('#canvasMap');
        let mapDimensions = map.getBoundingClientRect();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, mapDimensions.width / mapDimensions.height, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        renderer.setSize(mapDimensions.width, mapDimensions.height);
        addLight(scene);

        let root;
        // GLTF Loader
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/assets/model/cats.gltf', (gltf) => {
            root = gltf.scene;
            root.position.set(0, 0,0);
            root.rotation.y = Math.PI * -0.3;
            root.scale.set(initScale,initScale,initScale);
            scene.add(root);
        })

        //Orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.Zoom = true;
        controls.Pan = false;
        controls.Rotate = true;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Animate function
        const animate = function () {
            requestAnimationFrame(animate);
            if (root) {
                root.rotation.y += 0.010;
            }
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    });

    function addLight(scene) {
        // Light
        const light = new THREE.AmbientLight(0x404040, 1);
        scene.add(light);
        // Directional lights
        const directionalLight = new THREE.DirectionalLight(0xFF245E, 2);
        directionalLight.position.set(0, 1, 9);
        scene.add(directionalLight);
        const directionalLight2 = new THREE.DirectionalLight(0x2EFF96, .10);
        directionalLight2.position.set(-10, 0, -2);
        scene.add(directionalLight2);
        const directionalLight3 = new THREE.DirectionalLight(0x972EFF, 2);
        directionalLight3.position.set(-4, 2, 1);
        scene.add(directionalLight3);
    }

    return (
        <div ref={refContainer} id="canvasMap"></div>
    );
};

export default Tete;
