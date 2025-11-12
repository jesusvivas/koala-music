
import "./Tarjetamusica.css"


interface Props {
    song: {
        _id: string
        title: string
        album: string
        author: string
        audio: {
            url: string
            id: string
            filename: string
        },
    image: {
            url: string
            id: string
            filename: string
        }
    }
}


export default function (
    { song }: Props
) {

    function handlerClick() {
        // Aqui va la logica cuando se haga click en la cancion
        // que esto actualiza la cancion actual sonando
    }

    return (
        <div className="tarjeta" onClick={handlerClick}>
            <img className="imagen" src={song.image.url} alt="" />
                <div>
                    <h3>{song.title}</h3>
                    <p>{song.author}</p>
                </div>
        </div>
    )
}