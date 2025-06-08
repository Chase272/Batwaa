import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/navigation';
import React from 'react';
import { DocumentComponentProps } from 'types/components';

export const DocumentComponent: React.FC<DocumentComponentProps> = ({document}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Document', {document})}>
      <View className="mx-2 w-52 overflow-hidden rounded-xl bg-white shadow-md">
        <Image src="https://placehold.co/600x400" className="h-24 w-full" resizeMode="cover" />
        <View className="bg-slate-100 p-4">
          <Text className="text-center text-lg font-semibold text-gray-800">{document.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
