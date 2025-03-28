import {Text} from '@react-navigation/elements';
import {Pressable, PressableProps} from 'react-native';
import {FC} from 'react';

type RouteButtonProps = PressableProps & {
  routeName: string;
};

export const RouteButton: FC<RouteButtonProps> = ({routeName, ...rest}) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => ({
        backgroundColor: pressed ? '#ddd' : '#fff',
        padding: 10,
        borderRadius: 5,
      })}>
      <Text>{routeName}</Text>
    </Pressable>
  );
};
