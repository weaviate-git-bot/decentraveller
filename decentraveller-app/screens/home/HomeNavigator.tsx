import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigator from './RootNavigator';
import CreatePlaceNameScreen from './place/CreatePlaceNameScreen';
import CreatePlaceLocationScreen from './place/CreatePlaceLocationScreen';
import CreatePlaceProvider from './place/CreatePlaceContext';
import LeftSideBar from './LeftSideBar';
import Home from './Home';
import UserProfileEditScreen from '../users/profile/UserProfileEditScreen';

export type HomeStackScreens = {
    LeftSideBar: undefined;
    UserProfileEditScreen: undefined;
    CreatePlaceNameScreen: undefined;
    CreatePlaceLocationScreen: undefined;
};

const HomeStackNavigator = createStackNavigator<HomeStackScreens>();

const HomeNavigator = () => {
    return (
        <CreatePlaceProvider>
            <HomeStackNavigator.Navigator initialRouteName="LeftSideBar" screenOptions={{ headerShown: false }}>
                <HomeStackNavigator.Screen name="LeftSideBar" component={LeftSideBar} />
                <HomeStackNavigator.Screen
                    name="CreatePlaceNameScreen"
                    component={CreatePlaceNameScreen}
                    options={{
                        title: 'Add new place',
                        headerMode: 'screen',
                        headerShown: true,
                    }}
                />
                <HomeStackNavigator.Screen
                    name="CreatePlaceLocationScreen"
                    component={CreatePlaceLocationScreen}
                    options={{
                        title: 'Select location',
                        headerMode: 'screen',
                        headerShown: true,
                    }}
                />
                <HomeStackNavigator.Screen
                    name="UserProfileEditScreen"
                    component={UserProfileEditScreen}
                    options={{
                        title: 'Edit Profile',
                        headerMode: 'screen',
                        headerShown: true,
                    }}
                />
            </HomeStackNavigator.Navigator>
        </CreatePlaceProvider>
    );
};

export default HomeNavigator;
