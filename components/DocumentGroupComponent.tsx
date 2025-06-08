import { View, Text, Image, ScrollView } from 'react-native';
import { DocumentComponent } from './DocumentComponent';

import { DocumentGroupComponentProps } from 'types/components';



export const DocumentGroupComponent: React.FC<DocumentGroupComponentProps> = ({group_name, documents}) => {
  
  return (
    <View>
      <Text className="mb-8 font-poppins-regular text-2xl underline">{group_name}</Text>
      <ScrollView horizontal className=" flex-row gap-4" showsHorizontalScrollIndicator={false}>

        {documents.map((document,index) => {
          return (
            <DocumentComponent key={index} document={document} />
          );
        })}
      </ScrollView>
    </View>
  );
};
