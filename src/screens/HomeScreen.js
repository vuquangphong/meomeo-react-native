import { Text } from 'react-native';

import GirlScreen from './GirlScreen';
import BoyScreen from './BoyScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    <Tab.Navigator>
        <Tab.Screen
            name="Mèo Cái"
            options={{ tabBarIcon: () => <Text>💁‍♀️</Text> }}
            component={GirlScreen}
        />
        <Tab.Screen
            name="Mèo Đực"
            options={{ tabBarIcon: () => <Text>💁‍♂️</Text> }}
            component={BoyScreen}
        />
    </Tab.Navigator>
}

export default HomeScreen;