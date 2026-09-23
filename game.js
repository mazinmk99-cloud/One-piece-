// WORLD BUILDING & OBJECTS
const buildingMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 });
const woodMat = new THREE.MeshStandardMaterial({ color: 0x6b4226, roughness: 0.9 });
const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.7 });

// Pyramids
function createPyramid(x, z, radius, height) {
    const geo = new THREE.ConeGeometry(radius, height, 4);
    const mesh = new THREE.Mesh(geo, buildingMat);
    mesh.position.set(x, height / 2, z);
    mesh.rotation.y = Math.PI / 4;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

// Houses
function createHouse(x, z) {
    const houseGroup = new THREE.Group();
    const base = new THREE.Mesh(new THREE.BoxGeometry(6, 5, 6), buildingMat);
    base.position.y = 2.5;
    base.castShadow = true;
    houseGroup.add(base);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(2.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), buildingMat);
    dome.position.y = 5;
    houseGroup.add(dome);

    houseGroup.position.set(x, 0, z);
    scene.add(houseGroup);
}

// Palm Trees
function createPalmTree(x, z) {
    const treeGroup = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 6, 8), woodMat);
    trunk.position.y = 3;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    for (let i = 0; i < 5; i++) {
        const leaf = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 1), leafMat);
        leaf.position.set(0, 5.8, 0);
        leaf.rotation.y = (i * Math.PI) / 2.5;
        leaf.rotation.z = -0.3;
        leaf.castShadow = true;
        treeGroup.add(leaf);
    }
    treeGroup.position.set(x, 0, z);
    scene.add(treeGroup);
}

// Spawning Objects in Alabasta
createPyramid(-40, -50, 25, 30);
createPyramid(50, -80, 35, 45);

createHouse(-15, -20);
createHouse(-25, -20);
createHouse(-20, -32);
createHouse(20, -25);

createPalmTree(-8, -12);
createPalmTree(-5, -15);
createPalmTree(10, -15);
createPalmTree(15, -10);
createPalmTree(25, -30);

