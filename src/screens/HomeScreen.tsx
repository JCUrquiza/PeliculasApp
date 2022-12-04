import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const { isLoading, peliculasEnCine } = useMovies();
    const { top } = useSafeAreaInsets();

    if(isLoading) {
        return (
            <View style={{ flex:1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            <MoviePoster movie={ peliculasEnCine[0] } />
        </View>
    )

}
