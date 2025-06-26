import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'types/navigation';
import React from 'react';
import { DocumentComponentProps } from 'types/components';
import Ionicons from '@expo/vector-icons/Ionicons';

const Card_Colors = {
  '1': '#178f5a',
};

const Group_Icons: { [key: string]: React.ComponentProps<typeof Ionicons>['name'] } = {
  identity: 'finger-print-outline',
  vehicle: 'car-outline',
  license: 'car-outline',
  passport: 'person-outline',
  bank: 'cash-outline',
  education: 'school-outline',
  work: 'briefcase-outline',
  health: 'heart-half-outline',
  insurance: 'heart-half-outline',
  other: 'document-text-outline',
};

export const DocumentComponent: React.FC<DocumentComponentProps> = ({ document }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Document', { document })}>
      <View className="mx-2 h-40 w-56 overflow-hidden rounded-xl bg-[#178f5a] shadow-md">
        <View className="flex-row p-2">
          <Ionicons
            name={Group_Icons['health']}
            size={24}
            color="white"
            className="rounded-full bg-black/30 p-0.5"
          />
          <Text className="ml-2 font-poppins-regular text-lg text-white">{document.name}</Text>
          <Ionicons name="shield-checkmark-outline" size={17} color="white" className="ml-1 mt-1" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
