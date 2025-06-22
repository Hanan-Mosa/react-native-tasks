import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Paths } from './Route';
import HomeScreen from '../pages/HomeScreen';
import ToDoDetails from '../pages/ToDoDetails';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Paths.HOME} component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={Paths.DETAILS} component={ToDoDetails} options={{
        headerTitle: 'ToDO Details',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  )
}

export default StackNavigator;