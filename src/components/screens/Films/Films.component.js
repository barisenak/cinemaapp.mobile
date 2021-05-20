import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import {STATE_LOADING} from 'app/enum/state.enum';

import {Button} from 'app/components/partial/Button';
import {Text} from 'app/components/partial/Text';

import {styles} from './Films.styles';

function Films({state, loadFilms, films, page, setPage, navigation}) {
  useEffect(() => {
    loadFilms(page);
  }, []);

  const renderItem = ({item}) => (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="white"
      onPress={() =>
        navigation.navigate('FilmCard', {
          name: item.name,
          description: item.description,
          image: item.img,
          duration: item.duration,
          category: item.category,
          releaseDate: item.releaseDate,
        })
      }>
      <Image source={{uri: item.img}} style={styles.card} />
    </TouchableHighlight>
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
      style={styles.screenBackground}>
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
            refreshing="true"
            ListEmptyComponent={<Text style={{marginLeft: 10}}>Empty</Text>}
            // ListHeaderComponent={<Text style={{marginLeft: 10}}>head</Text>}
            ListFooterComponent={
              <ActivityIndicator size="small" color="black" />
            }
            onEndReached={() => {
              // loadFilms(page + 1);
              // setPage(page + 1);
            }}
            onEndReachedThreshold={0}
            initialNumToRender={5}
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
      <Text>{page}</Text>

      <Button type="default" onPress={() => loadFilms(page)}>
        Get
      </Button>
    </ScrollView>
  );
}

export default Films;
