import {StyleSheet, Text, View} from 'react-native';

export const CreateArticleFormScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Article Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
