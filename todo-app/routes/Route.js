import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../pages/settings';
import StackNavigator from './StackNavigator';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();
export const Paths={
HOME:"home",
DETAILS:"todo details",
StackNavigator:"stack navigator",
Settings:"settings"
};
const Route = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false, tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          marginInline: 10,
          elevation: 0,
          backgroundColor: 'rgba(210, 205, 205, 0.9)',
          borderRadius: 20,
          height: 80,
        },
      }}>
        <Tab.Screen name={Paths.StackNavigator} component={StackNavigator} options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="home" size={focused ? size : 20} color={focused ? color : 'black'} />
          ),
        }} />

        <Tab.Screen name={Paths.Settings} component={Settings} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="settings" size={focused ? size : 20} color={focused ? color : 'black'} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Route;