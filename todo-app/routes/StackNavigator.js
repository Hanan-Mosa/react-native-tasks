import CompletedTasks from '../pages/CompletedTasks';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Paths } from './Route';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Paths[0].name} component={Paths[0].component} options={{ headerShown: false }} />
      <Stack.Screen name="completedTasks" component={CompletedTasks} options={{
        headerTitle: 'Completed Tasks',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  )
}

export default StackNavigator;