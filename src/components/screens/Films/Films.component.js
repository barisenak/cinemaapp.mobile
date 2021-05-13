import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {STATE_LOADING} from 'app/enum/state.enum';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {styles} from './Films.styles';

function Films({state, loadFilms, films}) {
  useEffect(() => {
    loadFilms();
  }, []);

  const renderItem = ({item}) => (
    <View>
      <Image source={{uri: item.img}} style={styles.card} />
    </View>
  );

  const renderComedyItem = ({item}) => (
    <View>
      {item.category === 'COMEDY' && (
        <Image source={{uri: item.img}} style={styles.card} />
      )}
    </View>
  );

  const renderDramaItem = ({item}) => (
    <View>
      {item.category === 'DRAMA' && (
        <Image source={{uri: item.img}} style={styles.card} />
      )}
    </View>
  );

  const renderBiographyItem = ({item}) => (
    <View>
      {item.category === 'BIOGRAPHY' && (
        <Image source={{uri: item.img}} style={styles.card} />
      )}
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{backgroundColor: 'white'}}>
      <View style={styles.sectionContainer}>
        <Text style={styles.category}>Recently released</Text>
        {state === STATE_LOADING ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <FlatList
            data={films}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            ListEmptyComponent={<Text style={{marginLeft: 10}}>Empty</Text>}
            // ListHeaderComponent={<Text style={{marginLeft: 10}}>head</Text>}
          />
        )}
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.category}>Comedy</Text>

        {state === STATE_LOADING ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <FlatList
            data={films}
            renderItem={renderComedyItem}
            keyExtractor={item => item.id}
            horizontal
            ListEmptyComponent={<Text style={{marginLeft: 10}}>Empty</Text>}
          />
        )}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.category}>Drama</Text>
        {state === STATE_LOADING ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <FlatList
            data={films}
            renderItem={renderDramaItem}
            keyExtractor={item => item.id}
            horizontal
            ListEmptyComponent={<Text style={{marginLeft: 10}}>Empty</Text>}
          />
        )}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.category}>Biography</Text>
        {state === STATE_LOADING ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <FlatList
            data={films}
            renderItem={renderBiographyItem}
            keyExtractor={item => item.id}
            horizontal
            ListEmptyComponent={<Text style={{marginLeft: 10}}>Empty</Text>}
          />
        )}
      </View>

      <Text>{state}</Text>

      <Button type="default" onPress={loadFilms}>
        Get
      </Button>
    </ScrollView>
  );
}

export default Films;
