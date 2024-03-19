import { useContext, useState  } from "react";
import { Touchable,Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../styles/GlobleStyle";

interface ButtonProps {
    onPress: ()=> void ;
    title:string ;
    isBlue?: boolean;
    isGrey?: Boolean;

}

export default function Button({title,onPress,isBlue,isGrey}:ButtonProps) {
    const theme =useContext(ThemeContext);
     return(

        <TouchableOpacity
        style={
            isBlue
            ?styles.btnBlue
            :isGrey
            ?styles.btnGrey
            :theme==='light'
            ?styles.btnLight
            :styles.btnlightgrey
        }
        onPress={onPress}
        >
            <Text style={
                isBlue||isGrey
                ?styles.smalltextlight
                :theme==='dark'
                ?styles.smalltextlight
                :styles.smalltextdark
            }> {title}</Text>
            
        </TouchableOpacity>
     );

}
