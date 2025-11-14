import { useRef, useState } from "react"
import { useSong } from "../store"

export default function () {
    // Aqui vamos a escuchar cuando la cancion cambie y la actualizamos
    const { song } = useSong()
    const referenciaAudio = useRef<HTMLAudioElement | null>(null)


    function handlerPlay () {
        if(referenciaAudio.current){
            if(referenciaAudio.current.paused){
                referenciaAudio.current.play()
            } else {
                referenciaAudio.current.pause()
            }

        }
    }   

    return (
        <div className="py-20 w-100% flex flex-col items-center gap-3" >
            <img src={song?.image.url} alt="imagen de el album" className="w-xl rounded-sm"/>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-stone-300">{song?.title}</h2>
                <p className="opacity-50 text-indigo-300">{song?.album}</p>
                <p className="font-semibold opacity-80 text-indigo-200">{song?.author}</p>
            </div>
            <div className="flex justify-center py-5">
                <button className="px-10 py-3 bg-sky-700 text-white font-bold rounded-lg" onClick={handlerPlay}>
                    Play
                </button>
            </div>

            <audio src={song?.audio.url} controls autoPlay ref={referenciaAudio}></audio>
        </div>
    )
}