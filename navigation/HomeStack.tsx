import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeView } from 'Views/HomeTabView';
import { Text } from 'react-native';
import { HomeStackParamList, RootStackParamList } from 'types/navigation';
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
import ImportDocumentModal from 'components/ImportDocumentModal';

const Stack = createNativeStackNavigator<HomeStackParamList>();

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="ImportDocument"
        component={ImportDocumentModal}
      />
    </Stack.Navigator>
  );
};
