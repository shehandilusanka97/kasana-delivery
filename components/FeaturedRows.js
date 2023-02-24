import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantsCards from "./RestaurantsCards";

const FeaturedRows = ({ id, title, desc }) => {
  return (
    <View>
      <View className="mt-4 flex-row  items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>
      <ScrollView
        className='pt-4'
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {/* Restaurants Cards */}
        <RestaurantsCards 
         id={1234}
         imgUrl="https://links.papareact.com/gn7"
         title="ck's Sushi"
         rating={4.5}
         genre="Japanese"
         address="Gampaha"
         short_desc="CK's yummy sushi's"
         dishes={[]}
         long={355}
         lat={0}
        />
        <RestaurantsCards 
         id={1234}
         imgUrl="https://links.papareact.com/gn7"
         title="ck's Sushi"
         rating={4.5}
         genre="Japanese"
         address="Gampaha"
         short_desc="CK's yummy sushi's"
         dishes={[]}
         long={355}
         lat={0}
        />
        <RestaurantsCards 
         id={1234}
         imgUrl="https://links.papareact.com/gn7"
         title="ck's Sushi"
         rating={4.5}
         genre="Japanese"
         address="Gampaha"
         short_desc="CK's yummy sushi's"
         dishes={[]}
         long={355}
         lat={0}
        />
        <RestaurantsCards 
         id={1234}
         imgUrl="https://links.papareact.com/gn7"
         title="ck's Sushi"
         rating={4.5}
         genre="Japanese"
         address="Gampaha"
         short_desc="CK's yummy sushi's"
         dishes={[]}
         long={355}
         lat={0}
        />

      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
