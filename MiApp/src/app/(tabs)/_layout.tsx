// react-native
import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Icon } from '@/src/constants/icons';
import { COLOR } from '@/src/constants/colors';

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen 
            name="index" 
            options={{ 
                title: "Home",
                tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={COLOR.primary} />,
            
            }} 
         />
        <Tabs.Screen 
            name="profile" 
            options={{ title: "Profile",
                tabBarIcon: ({ color, size }) => <Icon name="account-outline" size={size} color={COLOR.secondary} />,
             }} />

        <Tabs.Screen 
            name="settings" 
            options={{ 
                title: "Settings",
                tabBarIcon: ({ color, size }) => <Icon name="cog-outline" size={size} color={color} />,
            }}
        />
    </Tabs>
)
}

export default _layout