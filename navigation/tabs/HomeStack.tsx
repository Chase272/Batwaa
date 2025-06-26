import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'Screens/HomeScreen';
import { Text } from 'react-native';
import { HomeStackParamList, RootStackParamList } from 'types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { DocumentScreen } from 'Screens/DocumentScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CameraScannerScreen } from 'Screens/CameraScannerScreen';
import {ImportDocumenFormScreen} from 'Screens/ImportDocumentFormScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DocumentScreen"
        component={DocumentScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CameraScannerScreen"
        component={CameraScannerScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ImportDocumentFormScreen"
        component={ImportDocumenFormScreen}
      />
    </Stack.Navigator>
  );
};
