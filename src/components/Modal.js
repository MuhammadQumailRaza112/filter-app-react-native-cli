import React from 'react';
import {Modal,StyleSheet, Pressable,View,Image, Text} from 'react-native';

const CustomModal = ({onRequestClose, selectedUser}) => {

    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{width:70, height:70}} source={{uri:selectedUser.owner.avatar_url}} />
            <Text style={styles.modalText}>{selectedUser?.description}</Text>
            <View style={{flexDirection:'row',width:'90%',marginBottom:10,  justifyContent:'space-between'}}> 
             <View style={styles.centerAlign} >
             <Text style={styles.modalText}>Open Issues</Text>   
             <Text >{selectedUser?.open_issues}</Text>   
             
             </View>
             <View style={styles.centerAlign}>
             <Text style={styles.modalText}>Forks</Text>
             <Text >{selectedUser?.forks}</Text>   

             </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onRequestClose}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
}

export default React.memo(CustomModal);

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      width:'80%',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      width:'90%'
    },
    centerAlign:{justifyContent:'center', alignItems:'center'},
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      marginTop:10,
      textAlign: "center",
      fontWeight:'bold'
    }
  });