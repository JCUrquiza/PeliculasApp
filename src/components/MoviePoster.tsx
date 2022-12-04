import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    return (
        <View
            style={{
                width,
                height,
                marginHorizontal: 8
            }}
        >
            <View
                style={ style.imagenContainer }
            >
                <Image 
                    source={{ uri }} 
                    style={ style.image } 
                    />
            </View>
        </View>
    )

}

const style = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imagenContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }
})
