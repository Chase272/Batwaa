import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/types';

export const DocumentComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Document')}>
      <View className="mx-2 w-52 overflow-hidden rounded-xl bg-white shadow-md">
        <Image src="https://placehold.co/600x400" className="h-24 w-full" resizeMode="cover" />
        <View className="bg-slate-100 p-4">
          <Text className="text-center text-lg font-semibold text-gray-800">Aadhar Card</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
