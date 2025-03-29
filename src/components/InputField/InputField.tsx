import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

import {InputFieldStyles as styles} from './InputField.styles';

type InputFieldProps = TextInputProps & {title: string};

export const InputField: React.FC<InputFieldProps> = ({title, ...rest}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput {...rest} style={styles.input} placeholderTextColor={'#aaa'} />
    </View>
  );
};
