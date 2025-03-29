import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import {HomeScreen} from '../screens/HomeScreen';
import {CreateArticleFormScreen} from '../screens/CreateArticleFormScreen';
import {CreateBusinessFormScreen} from '../screens/CreateBusinessFormScreen/CreateBusinessFormScreen';
import {BusinessListScreen} from '../screens/BusinessListScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.home}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={ROUTES.home} component={HomeScreen} />
        <Stack.Screen
          name={ROUTES.createArticle}
          component={CreateArticleFormScreen}
        />
        <Stack.Screen
          name={ROUTES.createBusiness}
          component={CreateBusinessFormScreen}
        />
        <Stack.Screen
          name={ROUTES.businessList}
          component={BusinessListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
