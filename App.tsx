import { RootStackParamList } from 'types/navigation';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from 'navigation/HomeStack';
import ImportDocumentForm from 'components/ImportDocumentForm';
import ImportDocumentModal from 'components/ImportDocumentModal';
import SettingsTabView from 'Views/SettingsTabView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="HomeScreen"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="home" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            // component={HomeStack}
            component={HomeStack}
          />
          <Tab.Screen
            name="Import_Documents"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="plus-a" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            component={ImportDocumentForm}
            // component={ImportDocumentModal}
          />
          <Tab.Screen
            name="Settings"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="spinner-cog" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            component={SettingsTabView}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
