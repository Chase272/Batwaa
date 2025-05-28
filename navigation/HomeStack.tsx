import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from 'Views/HomeView';
import { Text } from 'react-native';
import { RootStackParamList } from 'navigation/types';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { DocumentView } from 'Views/DocumentView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CameraScannerView } from 'Views/CameraScannerView';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeView} />
      <Stack.Screen options={{ headerShown: false }} name="Document" component={DocumentView} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CameraScannerScreen"
        component={CameraScannerView}
      />
    </Stack.Navigator>
  );
};
