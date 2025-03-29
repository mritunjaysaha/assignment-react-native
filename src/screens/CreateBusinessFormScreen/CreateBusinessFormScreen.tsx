import {useState} from 'react';
import {Text, View} from 'react-native';

import {InputField} from '../../components/InputField/InputField';
import {FormButton} from '../../components/FormButton/FormButton';

import {CreateBusinessFormScreenStyles as styles} from './CreateBusinessFormScreen.styles';

export const CreateBusinessFormScreen = () => {
  const [businessName, setBusinessName] = useState<string>('');

  const handlePressCreateBusiness = () => {
    console.log('Business name:', businessName);
  };
  const handleBusinessNameChange = e => {
    console.log(e.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputField
          title="Business Name"
          placeholder="Wakanda Books"
          value={businessName}
          onChangeText={setBusinessName}
          style={{marginBottom: 20}}
          onChange={handleBusinessNameChange}
        />

        <FormButton onPress={handlePressCreateBusiness}>
          <Text style={{color: '#fff'}}>Create Business</Text>
        </FormButton>
      </View>
    </View>
  );
};
