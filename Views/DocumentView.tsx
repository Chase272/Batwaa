import { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export const DocumentView = () => {
  const [DocNumber, setDocNumber] = useState<string>('');
  const [Name, setName] = useState<string>('');
  const [DOB, setDOB] = useState<Date>();
  const [Address, setAddress] = useState<string>('');
  const [MobileNumber, setMobileNumber] = useState<string>('');
  const [DOE, setDOE] = useState<Date>();

  return (
    <View className="flex-1 bg-green-300">
      <View className="h-1/6 w-full bg-green-300" />
      <View className="absolute left-[10%] top-[8%] z-10 h-60 w-4/5 rounded-2xl bg-green-200 p-2">
        <Text className="mb-2">Doc Number</Text>
        <View style={{ flex: 1, width: '100%' }}>
          {/* <Pdf
            // source={{ uri: 'file:///storage/emulated/0/Download/dummy.pdf' }}
            style={{ flex: 1 }}
            onError={(error) => console.log(error)}
            onPressLink={(uri) => console.log(`Link pressed: ${uri}`)}
          /> */}
        </View>
      </View>
      <View className="h-[17%] rounded-t-3xl bg-white" />
      <View className="h-5/6 w-full bg-white p-4">
        <Text>Name: {Name}</Text>
        <Text>Mobile Number: {MobileNumber}</Text>
        <Text>Address: {Address}</Text>
        <Text>DOB: {DOB?.toDateString()}</Text>
      </View>
    </View>
  );
};
