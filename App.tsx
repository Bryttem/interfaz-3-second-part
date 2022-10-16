import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;
const Flex = () => {
  return (
    <View style={styles.container}>

            <View style={[styles.box, styles.box1]}>
              <Image
                style={styles.imagen}
                source={require("./assets/logo.png")}/>
            </View>

            <View style={[styles.box, styles.box2]}>
              <Text style={styles.text1}>
                Healthy eating mean
              </Text>
            </View>

            <View style={[styles.box, styles.box3]}>
              <Text style={styles.text2}>
                Healthy eating means eating a variety of foods
                that give you the nutrients you need to maintain
                your health, feel good, and have energy. These
                nutrients include protein, carbohydrates, fat,
                water, vitamins and minerals...
              </Text>
            
              </View>
              <View style={[styles.boxRow]}>

                <Text style={styles.textIcon}>
                <Ionicons  name="eye" size={24} color="black" />
                  1,356 people are reading 
                </Text>
                <Text style={styles.textIcon}>
                  <AntDesign name="heart" size={24} color="red" />
                  1k
                </Text>
                <Text style={styles.textIcon}>
                <MaterialCommunityIcons name="message-reply-text-outline" size={24} color="black" />
                  25
                </Text>
                
              </View>
              <View style={[styles.box, styles.box4]}>
             
              <Text style={styles.text1}>
                Read more  
                <AntDesign name="arrowright" size={35} color="black" />         
              </Text> 
            </View>
            <View style={[styles.box, styles.boxInside2]}>
              </View>

            <View style={[styles.box, styles.boxLow]}>
            <View style={[styles.box, styles.boxInside]}>
              <Text style={styles.textInside}>
                How to protect your breath
              </Text>
              
              </View>     
              <Text style={styles.textInside2}>
                <Ionicons  name="eye" size={18} color="white" />
                  1,356 people are reading 
                </Text>       
              </View>

        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: "column",
    zIndex: 0,
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#FFDE4B',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 100,

  },
  box2: {

    height: "6%",
    flexDirection: "row",
  },
  boxRow: {

    height: "6%",
    flexDirection: "row",
    justifyContent: "center",
  },
  boxLow: {
    height: "20%",
    flexDirection: "row",
    top: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  boxInside: {
    backgroundColor: 'orange',
    height: "100%",
    flexDirection: "row",
    top: 20,
    position: "absolute",
    width: "80%",
    borderRadius:15,
  },
  boxInside2: {
    backgroundColor: 'cyan',
    height: "19.9%",
    flexDirection: "row",
    top:"77.7%",
    position: "absolute",
    width: "82%",
    borderRadius:15,
    marginLeft: "95%",
  },
  imagen:{
    height: "60%",
    width: "55%",
    top: 70,
    flex:1,
    marginLeft: "20%",
    position: 'absolute',
  },
  box3: {
 
    height: "15%",
  },
  box4: {

    height: "9%",
    top: 50,
  },
  text1: {
    color: "black",
    flex:1,
    flexDirection: "row",
    fontSize: 38,
    fontWeight: "bold",
    paddingLeft: 7,
    position: 'relative',
  },
  textInside: {
    color: "white",
    flex:1,
    flexDirection: "row",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    position: 'relative',
    top: 30,
  },
  textInside2: {
    color: "white",
    flex:1,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    position: 'relative',
    top: 30,
  },
  text2: {
    color: "gray",
    flex:1,
    fontSize: 16,
    fontWeight: "bold",
    paddingEnd: 10,
    paddingStart: 10,
    position: 'relative',
    textAlign: "justify",
  },
  textIcon:{
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
    paddingLeft: 5,
    top: 5,

  },
});

export default Flex;