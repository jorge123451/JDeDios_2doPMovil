import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importa la familia de íconos Ionicons
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectScreens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Proyectos') {
              iconName = focused ? 'folder' : 'folder-outline';
            }

            // Retorna el ícono específico
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000080',  // Color para la pestaña activa
          tabBarInactiveTintColor: 'gray',   // Color para la pestaña inactiva
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Proyectos" component={ProjectsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
