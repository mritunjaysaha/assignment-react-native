import {StyleSheet, Text, View} from 'react-native';

export const BusinessListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create Business</Text>
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
