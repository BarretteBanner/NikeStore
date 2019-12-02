import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShoeSpecificScreen from './src/screens/ShoeSpecificScreen';
import AddItemForm from './src/screens/AddItemForm';
import AddPictureForm from './src/screens/AddPictureForm';
import AddBenefitForm from './src/screens/AddBenefitForm';
import Test from './src/screens/Test';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Specific: ShoeSpecificScreen,
  NewItem: AddItemForm,
  NewPicture: AddPictureForm,
  NewBenefit: AddBenefitForm,
  Test: Test
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Nike Store'
  }
})

export default createAppContainer(navigator)