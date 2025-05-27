import { View, Text, Image, ScrollView } from 'react-native';
import { DocumentComponent } from './DocumentComponent';

export const DocumentGroupComponent = () => {
  return (
    <View>
      <Text className="mb-8 font-poppins-regular text-2xl underline">My Documents</Text>
      <ScrollView horizontal className=" flex-row gap-4" showsHorizontalScrollIndicator={false}>
        <DocumentComponent />
        <DocumentComponent />
        <DocumentComponent />
        <DocumentComponent />
      </ScrollView>
    </View>
  );
};
