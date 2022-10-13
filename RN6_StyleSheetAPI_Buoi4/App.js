import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StyleSheetAPI = () => {
  return (
    <View style={[styles.container, {
      //StyleSheet Column.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 3, backgroundColor: "#C9C9FF", margin: 20, borderRadius: 20}}>
        <Text style= {styles.textContainer}> Purple:#C9C9FF </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#3D85C6", margin: 20, borderRadius: 20 }}>
        <Text style= {styles.textContainer}> Blue:#3D85C6 </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#96CC96", margin: 20, borderRadius: 20 }}>
        <Text style= {styles.textContainer}> Green:#96CC96 </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#F4B940", margin: 20, borderRadius: 20 }}>
        <Text style= {styles.textContainer}> Yellow:#F4B940 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20
  },
  textContainer:{
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
    padding: 40,
  }
});

export default StyleSheetAPI;