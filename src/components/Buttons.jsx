import React from 'react';
import { View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
const Buttons = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.text}>Dragon Ball app</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Button
                                    onPress={() => navigation.navigate('login')}
                                    icon={
                                        <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                                    }
                                    buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                                    title={'Registarse'}
                                />
                                <Button
                                    onPress={() => navigation.navigate('login')}
                                    icon={
                                        <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                                    }
                                    buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                                    title={'Iniciar Sesión'}
                                />
                                <Button
                                    onPress={() => navigation.navigate('api')}
                                    icon={
                                        <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                                    }
                                    buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                                    title={'APIs'}

                                    
                                    
                                />
                                </View>
                                
                                
                            </View>
    )}

const styles = ScaledSheet.create({
        text: {
            fontSize: '30@s',
            marginLeft: '5@ms'
        },
        icon: {
            marginRight: '5@ms',
        },
        image: {
            width: '320@ms',
            height: '150@vs',
            resizeMode: 'contain',
            marginTop: '-10@ms',
            marginVertical: '-0@vs',
            borderRadius: 20,
        },
    });

export default Buttons;