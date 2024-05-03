import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SearchBar from "../components/searchBar";
import Lists from "../components/lists";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginButton } from "../components/LoginButton";
import CustomDrawer from "../components/CustomDrawer";
import StartPage from "./SignupPage";
//import SwitchPanel from "./SwitchPanel"; // Why are you importing SwitchPanel twice?
import { useNavigation } from "@react-navigation/native";




export default function HomePage() {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftBarRow}>
    
        {/* Call openMenu function onPress */}
        <TouchableOpacity >
          <Ionicons name="menu" size={20} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.cinelibra}>CINELIBRA</Text>
      </View>
      <SearchBar style={styles.searchBar} />
      <TouchableOpacity onPress={() => navigator.navigate("StartPage")}>
        <LoginButton message={'Go to start'} />
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigator.navigate("ItemDetailPage")}>
       <LoginButton message={'Go to detail page'} />
       </TouchableOpacity>
      <Lists style={styles.lists} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 5,
    paddingVertical: 1,
  },
  leftBarRow: {
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 17,
    marginRight: 136,
  
  },
  cinelibra: {
    color: "rgba(0,0,0,1)",
    height: 34,
    width: 104,
    fontSize: 20,
    textAlign: "center",
    marginLeft: 85,
    marginTop: 15,
    fontStyle:'normal'
   
  },
  searchBar: {
    height: '80%',
    width: '80%',
    backgroundColor: "rgba(0, 0, 0 ,0.3)",
  },
  lists: {
    height: '100%',
    width: '100%',
  },
  listView: {
    flex:1
  },
  safeArea: {
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  }
});
