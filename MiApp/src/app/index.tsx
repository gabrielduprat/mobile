import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useAuth } from '@/src/hooks/useAuth';

SplashScreen.preventAutoHideAsync(); // prevents the splash screen from automatically hiding

const index = () => {
    const {user} = useAuth();
    const [isLoading, setIsLoading] = useState(true); // para saber si esta cargando

    useEffect(() => {
        const prepare = async () => {
            //Esperamos un poco por si es necesario
            await new Promise((res) => setTimeout(res, 2000));
            await SplashScreen.hideAsync();
            setIsLoading(false);
        };
        prepare();
    }, []);
    
    if (isLoading) return null;

    return user ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)" />;
};


export default index;