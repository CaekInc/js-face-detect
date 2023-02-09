import * as faceapi from 'face-api.js'
import modelUrl from '../assets/models/ssd_mobilenetv1_model-weights_manifest.json?url'
import model1 from '../assets/models/ssd_mobilenetv1_model-shard1?raw'
import model2 from '../assets/models/ssd_mobilenetv1_model-shard2?raw'
import {onMount} from "solid-js";

export default function Examples() {
    onMount(  () => {
         faceapi.loadSsdMobilenetv1Model(modelUrl)
            // faceapi.nets.ssdMobilenetv1.load([])
    })

    const load = async (item) =>
        new Promise((resolve, reject) => {
            item.onload = () => resolve(1)
            item.onerror = () => reject(1)
        })

    async function imageFromFile(file) {
        const image = new Image()
        image.src = URL.createObjectURL(file)
        await load(image)
        return image
    }

    const detectFaces = async (file) => {
        const image = await imageFromFile(file)
        const detections = await faceapi.detectAllFaces(
            image,
            new faceapi.SsdMobilenetv1Options()
        )
        return {file, detections}
    }

    return (
        <>
            <input onInput={(e) => detectFaces(e.target?.files[0])} type='file'/>
        </>
    )
}
