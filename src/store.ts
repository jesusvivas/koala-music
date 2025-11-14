import { create } from "zustand";
import type { Song } from "./types/song";



export const useSong = create(
    function (set): {
        song: Song | null,
        updateSong: (song: Song) => void
    } {


    return {
    song: null,
    updateSong: function (newSong: Song) {
        localStorage.setItem("song", JSON.stringify(newSong))
        set({ song: newSong })
    }
    }
    }
)