import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { customTxt } from '../constants/fontStyle';
import { colors } from '../constants/colors';

interface GifCardProps {
  imageUrl: string;
  title: string;
  onPress?: () => void;
}

const GifCard: React.FC<GifCardProps> = ({ imageUrl, title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.titleView}>
      <Text style={customTxt('700', 16, colors.black).txt}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'stretch',
  },
  titleView: {
    padding: 15,
    alignItems: 'center',
  },
});

export default GifCard;
