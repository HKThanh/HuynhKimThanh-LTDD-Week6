import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Pressable, Image, SafeAreaView, ScrollView } from "react-native";

const ItemCard = ({ item }) => (
    <View style={styles.itemCard}>
        <Image source={item.img_link} style={{ width: 100, height: "100%", marginLeft: 10 }}></Image>
        <View style={{justifyContent: 'space-evenly', height: '100%'}}>
            <Text style={{fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 14}}>Shop {item.shop_name}</Text>
        </View>
        <Pressable style={{width: 88, height: 38, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
            <Text style={{color: '#fff'}}>Chat</Text>
        </Pressable>
    </View>
);

const OneColumn = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://66f5f930436827ced97591ce.mockapi.io/api/lab04/items')
        .then(response => response.json())
        .then(json => setItem(json))
    }, [])

    const renderItem = ({ item }) => {
        return <ItemCard item={item} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại{'\n'}chát với shop!</Text>
            </View>
            <FlatList style ={{flex: 1, width: '100%'}}
                data={item}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    itemCard: {
        flex: 1,
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default OneColumn;