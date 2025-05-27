import React from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

export const SearchComponent = () => {
  return (
    <View>
      <View
        className="flex-row items-center
      rounded-full bg-violet-50 p-1 ">
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          className="flex-1 rounded-full px-4  font-poppins-regular text-base"
        />

        <TouchableOpacity className="pr-3">
          <Fontisto name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex  gap-1 pb-5">
        <View className="flex-row gap-1">
          <TouchableOpacity className="mt-4 self-start">
            <View className="m-auto rounded-md bg-slate-800 p-2">
              <Text className="font-poppins-regular text-sm color-white">Important</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="mt-4 self-start">
            <View className="m-auto rounded-md bg-slate-800 p-2">
              <Text className="font-poppins-regular text-sm color-white">Important</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
