import axios from 'axios';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';

const API_KEY = 'E6uI82vhXVmshj4u9ihLgSxGVjA9p14EAQhjsnpn40Zs8w432h';

const axiosInstance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
  timeout: 2000,
  headers: { 'X-Mashape-Key': API_KEY }
});

export const searchTracks = (singerName) => {
  return axiosInstance.get(`search?q=${singerName}`).then(
    response => {
      const albums = response.data.data.map(item => item.album);
      const uniqueAlbums = _.uniqBy(albums, 'title');

      return uniqueAlbums;
    })
}

export const getAlbumTracks = albumId => {
  return axiosInstance.get(`album/${albumId}`).then(response => response.data.tracks.data)
}

export const storeData = async (key, value) => {
  const stringifyValue = JSON.stringify(value);

  try {
    await AsyncStorage.setItem(key, stringifyValue);
    return value;
  } catch (error) {
    // Error saving data
  }
}

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    // Error saving data
  }
}