import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import Fontisto from '@expo/vector-icons/Fontisto';
import { WelcomeComponent } from 'components/WelcomeComponent';
import { SearchComponent } from 'components/SearchComponent';

import { DocumentGroupComponent } from 'components/DocumentGroupComponent';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FileMeta, GroupedDocuments } from 'types/file';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const [DocumentByGroups, setDocumentByGroups] = useState<GroupedDocuments>();

  function groupDocumentsByCategory(documentsArr: FileMeta[]) {
    const GroupedObj: GroupedDocuments = {};

    documentsArr.map((value, index) => {
      const { category } = value;
      if (GroupedObj[category]) {
        GroupedObj[category].push(value);
      } else {
        GroupedObj[category] = [value];
      }
    });

    setDocumentByGroups(GroupedObj);
  }

  async function getDocumentsFromStorage() {
    const files = await AsyncStorage.getItem('FILES_METADATA');
    const metadataList = JSON.parse(files || '[]');
    groupDocumentsByCategory(metadataList);
  }

  useEffect(() => {
    getDocumentsFromStorage();
  }, [DocumentByGroups]);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-white px-3">
        <WelcomeComponent />
        <SearchComponent />
        {DocumentByGroups &&
          Object.keys(DocumentByGroups).map((value, index) => (
            <DocumentGroupComponent
              key={index}
              group_name={value}
              documents={DocumentByGroups[value]}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
