import {  View, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import React from 'react';
import Cards from './Cards';
import APIs from './APIs';
import Buttons  from './Buttons';

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={true}>
                
                <Buttons />
                <Cards />
            </ScrollView>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 245, 214, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30@ms'
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: '10@vs',
    },
});

export default Screen1;