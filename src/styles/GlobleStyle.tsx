import { mycolors } from "./colors";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
  btnBlue:{
    width:75,
    height:75,
    borderRadius:40,
    backgroundColor: mycolors.blue,
    justifyContent:'space-evenly',
    alignItems:'center',
    margin:'3%',
    paddingRight:10,
   
  },
  btnGrey:{
    width:75,
    height:75,
    borderRadius:40,
    backgroundColor: mycolors.btnGrey,
    justifyContent:'space-evenly',
    alignItems:'center',
    margin:'3%',
    paddingRight:10,
   
  },
  btnLight:{
    width:75,
    height:75,
    borderRadius:40,
    backgroundColor: mycolors.white,
    justifyContent:'space-evenly',
    alignItems:'center',
    margin:'3%',
    paddingRight:10,
   
  },
  btnDark:{
    width:75,
    height:75,
    borderRadius:40,
    backgroundColor: mycolors.btnGrey,
    justifyContent:'space-evenly',
    alignItems:'center',
    margin:'3%',
    paddingRight:10,
   
  },
  btnlightgrey:{
    width:75,
    height:75,
    borderRadius:40,
    backgroundColor: mycolors.btnlightgrey,
    justifyContent:'space-evenly',
    alignItems:'center',
    margin:'3%',
    paddingRight:10,
   
  },
  smalltextdark:{
    fontSize:32,
    color:mycolors.black,
  },
  smalltextlight:{
    fontSize:32,
    color: mycolors.white,
  },
  row:{
    maxWidth:'100%',
    flexDirection: "row",
  },
  viewButton:{
    position:'absolute',
    bottom:50,
  },
  screenFirstNumber:{
    fontSize:96,
    color: mycolors.grey,
    fontWeight:'200',
    alignSelf:'flex-end',
  },
  screenSecondNumber:{
    fontSize:40,
    color:mycolors.grey,
    alignSelf:'flex-end',
    fontWeight:'200',
  },

 });