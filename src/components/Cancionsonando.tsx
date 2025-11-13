import { useState } from "react"

export default function () {
    // Aqui vamos a escuchar cuando la cancion cambie y la actualizamos
    const [isplay, setIsPlay] = useState(false)

    function handlerPlay () {
        setIsPlay(!isplay)
    }

    return (
        <div className="py-20 w-100%" >
            <img src="" alt="" />
            <div className="text-center">
                <h2 className="text-4xl font-bold text-stone-300">Titulo de la canción</h2>
                <p className="opacity-50 text-indigo-300">Album</p>
                <p className="font-semibold opacity-80 text-indigo-200">Author</p>
            </div>
            <div className="flex justify-center py-5">
                <button className="px-10 py-3 bg-sky-700 text-white font-bold rounded-lg" onClick={handlerPlay}>
                    { isplay ? "Play" : "Pause"}
                </button>
            </div>
        </div>
    )
}