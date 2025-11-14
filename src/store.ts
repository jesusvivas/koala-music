import { create } from "zustand";

interface Song {
    _id: string
    title: string
    author: string
    album: string
    image: {
    id: string
    url: string
    filename: string
    }
    audio: {
    id: string
    url: string
    filename: string
    }
}

export const useSong = create(
    function (set): {
        song: Song | null,
    updateSong: (song: Song) => void
    } {
    return {
    song: null,
    updateSong: function (newSong: Song) {
        set({ song: newSong })
    }
    }
    }
)