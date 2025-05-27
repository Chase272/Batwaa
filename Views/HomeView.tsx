import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontisto from '@expo/vector-icons/Fontisto';
import { WelcomeComponent } from 'components/WelcomeComponent';
import { SearchComponent } from 'components/SearchComponent';

import { DocumentGroupComponent } from 'components/DocumentGroupComponent';


export const HomeView = () => {

  return (
    <SafeAreaView className="bg-white px-3">
      <WelcomeComponent />
      <SearchComponent />
      <DocumentGroupComponent />

    </SafeAreaView>
  );
};
