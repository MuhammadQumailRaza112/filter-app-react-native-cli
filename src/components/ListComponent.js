import React, { useState } from 'react';
import { View, Text, ActivityIndicator,StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import {  useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Modal from './Modal';
export default function ListComponent() {
    const { users, isLoading } = useSelector(state => state.users);
    const insets = useSafeAreaInsets();
    const [selectedUser, setSelectedUser] = useState(undefined);

    const onRequestClose = () => {
        setSelectedUser(undefined)
    }

    if (isLoading)
        return (
            <View style={styles.flex}>
            <ActivityIndicator color="black" size="large" />
            </View>
        )

    return (
        <>
            {
                selectedUser &&
                <Modal onRequestClose={onRequestClose} selectedUser={selectedUser}/>
            }
            <FlatList
                keyExtractor={item => item.id}
                data={users}
                ListFooterComponent={() => (
                    <View style={{ height: insets.bottom, backgroundColor: 'red' }}>

                    </View>
                )}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (<View style={{ borderWidth: 1, opacity: 0.2, marginBottom: 20, width: '90%', alignSelf: 'center' }} />)}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setSelectedUser(item)} style={{ width: '90%', borderRadius: 20, flexDirection: 'row', alignItems: 'center', elevation: 2, padding: 20, alignSelf: 'center', backgroundColor: '#fff', marginBottom: 20 }}>
                        <View>
                            <Image style={{ width: 40, borderRadius: 20, height: 40 }} source={{ uri: item.owner.avatar_url }} />
                        </View>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.owner.url}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={{ paddingBottom: insets.bottom }} />
        </>
    );
}

const styles = StyleSheet.create({
    flex: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
  });