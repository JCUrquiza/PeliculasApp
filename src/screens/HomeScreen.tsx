import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const { isLoading, peliculasEnCine } = useMovies();

    if(true) {
        return (
            <View style={{ flex:1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <View>
            <Text>Home!</Text>
        </View>
    )

}
