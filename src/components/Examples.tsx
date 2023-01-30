import * as faceapi from 'face-api.js'
import {onMount} from "solid-js";

export default function Examples() {
   onMount(() => {
       // faceapi.loadSsdMobilenetv1Model('/models')
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
        return { file, detections }
    }

    return (
        <>
            <input onInput={detectFaces} type='file'/>
        </>
    )
}
