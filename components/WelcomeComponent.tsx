import { View, Text, Image } from 'react-native';


export const WelcomeComponent = () => {
  return (
    <View className="items-left py-4">
      <Text className="font-poppins-medium text-lg">Good Morning</Text>
      <View className="flex-row justify-between pb-2">
        <View>
          <Text className="mt-2 font-poppins-regular text-3xl">Marcus White</Text>
          <Text className="mt-2 font-poppins-regular text-base">Location</Text>
        </View>
        <Image
          source={{ uri: 'https://avatar.iran.liara.run/public/boy?username=Ash' }}
          className="h-16 w-16"
        />
      </View>


      
    </View>
  );
};
