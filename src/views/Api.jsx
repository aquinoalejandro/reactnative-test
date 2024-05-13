import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Text, Card } from '@rneui/themed';

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const jsonData = await response.json();
        setData(jsonData.items);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.text}>{item.name}</Card.Title>
      <Card.Divider />
      <Text>{item.description}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personajes de Dragon Ball</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 245, 214, 0.4)',
    alignItems: 'center',
    marginTop: '30@ms',
  },

  card: {
    marginRight: '10@ms',
    borderRadius: 20,
    alignContent: 'center',
    color: '#FFFFF',
  },

  title: {
    fontSize: 24,
    marginBottom: '20@ms',
    textAlign: 'center',
  },
});

export default Api;
