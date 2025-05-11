import { View, Text } from 'react-native'
import React, {createContext, useContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

//Creo un tipo de contexto para el AuthContext
type AuthContextType = {
    user: any;
    signIn: (username: string) => Promise<void>;
    signOut: () => Promise<void>;
};
//Creo un contexto para el AuthContext
export const AuthContext = createContext<AuthContextType>({
    user: null,
    signIn: async () => {},
    signOut: async () => {},
});

//Proveedor que envolverá a la app y brindara acceso a los valores del contexto
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<any>(null);
    // al iniciar la aplicación, obtener el usuario desde el contexto
    useEffect(() => {
        const getUser = async () => {
            // harcodear el usuario
        // lo hacemos una vez porque luego de persister el usuario ya lo tenemos registrado
            // const hardCodeUser = {
            // username: 'Gabriel',
            // email: 'gabriel@gmail.com',
            // password: '123456',
            // };
            // await AsyncStorage.setItem('user', JSON.stringify(hardCodeUser));
            // setUser(hardCodeUser);
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                 setUser(JSON.parse(storedUser));
            }
        };
        getUser();
    }, []);

    const signIn = async (username: string) => {
        setUser(username);
        await AsyncStorage.setItem('user', JSON.stringify(username));
    };

    const signOut = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};