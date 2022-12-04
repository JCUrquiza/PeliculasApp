import React from 'react'
import { Text, View } from 'react-native'
import currencyFormatter from 'currency-formatter';
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

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    { movieFull.overview }
                </Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    { currencyFormatter.format(movieFull.budget, { code: 'USD' }) }
                </Text>

            </View>
        </>
    )
}
