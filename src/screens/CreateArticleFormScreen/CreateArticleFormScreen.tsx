import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Article} from '../../types/Article';
import {InputField} from '../../components/InputField/InputField';
import {FormButton} from '../../components/FormButton/FormButton';

export const CreateArticleFormScreen = () => {
  const [articleData, setArticleData] = useState<
    Pick<Article, 'name' | 'qty' | 'selling_price'>
  >({
    name: '',
    qty: 0,
    selling_price: 0,
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
          marginBottom: 20,
        }}>
        Create Article
      </Text>

      <View style={styles.formContainer}>
        <InputField title="Name" placeholder="KitKat" />
        <InputField title="Selling Price" placeholder="30" />
        <InputField title="Quantity" placeholder="10" />
        <FormButton>
          <Text style={{color: '#fff'}}>Create Business</Text>
        </FormButton>
      </View>
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
  formContainer: {
    gap: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});
