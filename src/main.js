import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 初始化场景

const scene = new THREE.Scene();
// 初始化相机 (视野角度（FOV）,长宽比，近截面，远截面)
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
// 设置相机的位置
camera.position.set(0, 10, 10)
scene.add(camera)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// 调用setSize(window.innerWidth/2, window.innerHeight/2, false)将使得你的应用程序以一半的分辨率来进行渲染。
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)


// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

// 添加物体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 创建Mesh面
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// 物体会默认放在（0，0，0）的位置

// 渲染场景
function animate() {
    // requestAnimationFrame使渲染器能够在每次屏幕刷新时对场景进行绘制的循环
    // 有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update()
    renderer.render(scene, camera);
}
animate();
