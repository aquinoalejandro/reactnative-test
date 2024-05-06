import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const APIs = () => {
    const [data, setData] = useState(null);

    API_KEY = "lga1CZIgaB28Vb5vr1uqkXF1Dao9geIC4bImLE3P"

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    if (data === null) {
        return <View>
            <ActivityIndicator animating={true} size={'large'} />
        </View>;
    }

    return (
        <View>
            <Text>{data.title}</Text>
            
            <Text>{data.explanation}</Text>
        </View>
    );
};

export default APIs;