import React, { useState } from 'react';
import { View} from 'react-native';
import { Text, Card } from '@rneui/themed';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';



const Cards = () => {
    return (
        <View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://medias.spotern.com/people/w320/1/1159-1532336937.jpg'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA SSJ1</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://novias.futbol/wp-content/uploads/2017/04/lionel-messi-min.jpg'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA SSJ2</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://pre00.deviantart.net/ab84/th/pre/i/2016/247/c/d/messi_super_saiyan_argentina_by_greytonano-daghffc.jpg'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA SSJ3</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://th.bing.com/th/id/R.ccb90f1d176d5022d6fb0dfaa054e2f8?rik=jRlXWR1apORpMw&riu=http%3a%2f%2fpbs.twimg.com%2fmedia%2fCQAbWVIW8AIBpsN.png&ehk=iyL4cePLIuODhg9lO%2bDM57barMwJdUIHZrl0%2fS1ziBw%3d&risl=&pid=ImgRaw&r=0'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA SSJ4</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source={require('../../assets/img/messissj4.png')} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA GOD</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://i.ytimg.com/vi/fr1Ya7OTims/maxresdefault.jpg'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA SSJ BLUE</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://www.sportbuzzbusiness.fr/wp-content/uploads/2018/06/lionel-messi-super-sayan-fox-sports-fifa-world-cup-commercial.jpg'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA ULTRA-INSTINCT</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://asset.indosport.com/article/image/207415/lionel_messi_instagram_-169.jpg?w=750&h=423'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA ASCENSO</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://th.bing.com/th/id/OIP.xR9bsmi1CCMmvz9cUKmVTQHaF7?rs=1&pid=ImgDetMain'}} />
                </Card>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>MESSI BARBA ASCENSO DEFINITIVE EDITION</Card.Title>
                        <Card.Divider />
                    <Image style={styles.image} source= {{uri:'https://ts2.tarafdari.com/contents/user562889/content-image/img_20190803_023852_687.jpg'}} />
                </Card>
                
                
            </View>
        </View>
    );
};
const styles = ScaledSheet.create({
    card: {
        marginRight: '10@ms',
        borderRadius: 20,
        alignContent: 'center',
        color: '#FFFFF',

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
    text: {
        marginLeft: '10@ms',
        fontSize: 16,
        color: 'black',
        borderColor: '#000000',
        marginBottom: '5@ms'
    },
});


export default Cards;
