import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const APIs = () => {
    const [data, setData] = useState(null);

    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`
            https://dragonball-api.com/api/characters`);
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);
    return (
        <View>
            <Text>{data.title}</Text>
            
            <Text>{data.explanation}</Text>
        </View>
    );
};

export default APIs;