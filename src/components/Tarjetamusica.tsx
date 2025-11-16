import { useSong } from "../store"
import type { Song } from "../types/song"

interface Props {
    song: Song
}

export default function (
    { song }: Props
) {

    const { updateSong } = useSong()

    function handlerClick() {
        // Aqui va la logica cuando se haga click en la cancion
        // que esto actualiza la cancion actual sonando
        updateSong(song)
    }

    return (
        <div className="flex px-5 py-3 gap-2 items-center cursor-pointer hover:bg-gray-700 rounded-lg transition-colors" onClick={handlerClick}>
            <img className="flex rounded-lg w-50% h-15" src={song.image.url} alt="" />
                <div className="text-white font-s">
                    <h3 className="font-bold text-violet-400">{song.title}</h3>
                    <p className="font-medium text-indigo-300">{song.author}</p>
                </div>
        </div>
    )
}