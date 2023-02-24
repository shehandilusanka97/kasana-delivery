import { Image, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import {StarIcon} from 'react-native-heroicons/solid'
import location from '../assets/images/location-marker.png'

const RestaurantsCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className='px-3 pb-4'>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className='flex-row items-center space-x-1 pb-1'>
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className='text-xs text-gray-500'><Text className='text-green-500'>{rating}</Text> . {genre}</Text>
        </View>
        <View className='flex-row items-center space-x-1'>
            <Image source={location} opacity={0.7} className='w-5 h-5'/>
            <Text className='text-xs text-gray-500'>NearBy . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantsCards;
