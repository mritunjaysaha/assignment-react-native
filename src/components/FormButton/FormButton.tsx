import {FC, ReactNode} from 'react';
import {Pressable, PressableProps} from 'react-native';

import {FormButtonStyles as styles} from './FormButton.styles';

type FormButtonProps = PressableProps & {
  children: ReactNode;
};

export const FormButton: FC<FormButtonProps> = ({children, ...rest}) => {
  return (
    <Pressable
      {...rest}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#ddd' : '#000',
        },
        styles.container,
      ]}>
      {children}
    </Pressable>
  );
};
