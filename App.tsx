import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View,SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { mycolors } from "./src/styles/colors";
import Mykeyboard from './src/components/Mykeyboard';

export default function App() {

  const[theme,setTheme]=useState('light');
  return (
    <ThemeContext.Provider value={theme}>
     <SafeAreaView style={theme === 'light'?styles.container:[styles.container,{backgroundColor:'#000000'}]}>
      <Switch
        value={theme==='dark'}
        style={{transform:[{scaleX:1},{scaleY:1}]}}
       onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}  
       ios_backgroundColor="black"        
        thumbColor={theme==='light'? 'black':'white'}
             />
             <Mykeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: mycolors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:'10%',
  }, 
});
