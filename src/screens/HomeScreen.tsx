import {StyleSheet, Text, View} from 'react-native';
import {RouteButton} from '../components/RouteButton/RouteButton';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from './../constants/routes';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressCreateArticle = () => {
    navigation.navigate(ROUTES.createArticle);
  };

  const onPressCreateBusiness = () => {
    navigation.navigate(ROUTES.createBusiness);
  };

  const onPressBusinessList = () => {
    navigation.navigate(ROUTES.createBusiness);
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <RouteButton routeName="Create Article" onPress={onPressCreateArticle} />
      <RouteButton
        routeName="Create Business"
        onPress={onPressCreateBusiness}
      />
      <RouteButton routeName="Business List" onPress={onPressBusinessList} />
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
