import React from 'react'
import { Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterfaces'
import { MovieFull } from '../interfaces/movieInterfaces'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    movieFull: MovieFull,
    cast: Cast[];
}

export const MovieDatails = ({ movieFull, cast }: Props) => {

    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='star-outline'
                        color="grey"
                        size={20}
                    />
                    <Text> { movieFull.vote_average }</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - { movieFull.genres.map( g => g.name).join(', ') }
                    </Text>
                </View>
            </View>
        </>
    )
}
