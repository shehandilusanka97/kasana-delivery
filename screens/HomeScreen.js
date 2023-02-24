import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import search from '../assets/images/search.png'
import adjustment from '../assets/images/adj.png'
import{UserIcon,ChevronDownIcon} from 'react-native-heroicons/outline';
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color='#00CCBB'/>
            </Text>
        </View>
        <UserIcon size={35} color='#00CCBB'/>
      </View>
      {/* Search box  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 "> 
        <View className='flex-row space-x-2 flex-1 bg-gray-100 p-3'>
          <Image source={search} className='w-5 h-5'/>
          <TextInput placeholder="Restaurants and cuisines" keyboardType='default'/>

        </View>
        <Image source={adjustment} className='w-7 h-7'/>
      </View>
      {/* Content  */}
      <ScrollView>
        {/* Categories  */}
        
        {/* Featured Rows  */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
