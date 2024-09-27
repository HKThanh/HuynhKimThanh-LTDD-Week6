import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OneColumn = () => {
    return (
        <View style={styles.container}>
            <Text>One Column</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default OneColumn;