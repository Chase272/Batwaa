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
import { HomeStack } from 'navigation/tabs/HomeStack';
import { ImportDocumentTab } from 'navigation/tabs/ImportDocumentTab';
import { SettingsTab } from 'navigation/tabs/SettingsTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, TouchableOpacity, View } from 'react-native';
const Tab = createBottomTabNavigator<RootStackParamList>();

export const CustomTabBarButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: (e: any) => void;
}) => (
  <View
    className="mt-[-45] h-[140] items-center justify-start rounded-full border-[1px] border-[#2196f3] bg-white pt-10  "
    // style={{
    //   top: -45,
    //   padding: 5,
    //   paddingTop: 36,
    //   borderTopColor: '#2196f3',
    //   borderRadius: 100,
    //   borderColor: 'red',
    //   borderWidth: 1,
    //   height: 140,
    //   justifyContent: 'flex-start',
    //   alignItems: 'center',
    // }}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingBottom: 35,
        borderRadius: 17,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          borderRadius: 100,
          top: -20,
          width: 80,
          height: 80,
          paddingTop: 14,
          borderColor: '#cc7e65',
          borderWidth: 5,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeTab"
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'white',
              paddingTop: 7,
              height: '8%',
              borderColor: 'red',
            },
          }}>
          <Tab.Screen
            name="HomeTab"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="home" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            // component={HomeStack}
            component={HomeStack}
          />
          <Tab.Screen
            name="ImportDocumentTab"
            component={ImportDocumentTab}
            options={{
              tabBarLabel: 'Import',
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="upload" size={size} color={focused ? '#2196f3' : color} />
              ),
              tabBarButton: (props) => (
                <CustomTabBarButton {...props} onPress={props.onPress ?? (() => {})} />
              ),
            }}
          />
          <Tab.Screen
            name="SettingsTab"
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ focused, color, size }) => (
                <Fontisto name="spinner-cog" size={size} color={focused ? '#2196f3' : color} />
              ),
            }}
            component={SettingsTab}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
