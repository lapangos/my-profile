import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import discoverData from '../../assets/data/discoverData';

const ProfileData = (props, {route, navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MusicPlayer', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 0 : 0},
          ]}
          imageStyle={styles.discoverItemImage}></ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderNewReleaseItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MusicPlayer', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItemVideos,
            {marginLeft: item.id === 'newRelease-1' ? 0 : 0},
          ]}
          imageStyle={styles.discoverItemImage}></ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.flatListContainer}>
      <Text>{props.numColumn}</Text>
      <FlatList
        data={discoverData}
        renderItem={renderDiscoverItem}
        key={'_'}
        keyExtractor={item => item.id}
        numColumns={props.numColumn}
        vertically
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: 20,
    width: 460,
    height: 490,
  },
  discoverItem: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    marginRight: 30,
    marginBottom: 10,
  },
  discoverItemVideos: {
    width: 100,
    height: 80,
    justifyContent: 'center',
    marginRight: 30,
    marginBottom: 10,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
});

export default ProfileData;
