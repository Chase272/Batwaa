import { RootStackParamList } from 'navigation/types';

import { SafeAreaView, Text } from 'react-native';
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
import ImportDocsView from 'Views/ImportDocsView';
import ImportDocumentForm from 'components/ImportDocumentForm';

const Tab = createBottomTabNavigator<RootStackParamList>();

function SettingsScreen() {
  return <Text>Import Docs</Text>;
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  return (
    // <SafeAreaView>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="HomeScreen"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="home" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            component={HomeStack}
          />
          <Tab.Screen
            name="Import_Documents"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="plus-a" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            // component={ImportDocsView}
            component={ImportDocumentForm}
          />
          <Tab.Screen
            name="Documents"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="preview" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}
