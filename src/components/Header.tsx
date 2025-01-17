import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import { customTxt } from '../constants/fontStyle';
import { colors } from '../constants/colors';
import NavigationService from '../navigation';
import Icons from '../../assets/icons';

interface HeaderProps {
  title: string;
  isGoBack?: boolean;
}

export default function Header({ title, isGoBack = false }: HeaderProps) {
  const _onPressGoBack = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.headerCtn}>
      {isGoBack ? (
        <TouchableOpacity onPress={_onPressGoBack}>
          <Image source={Icons.icBack} style={styles.iconBack} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconBack} />
      )}
      <Text style={customTxt('700', 24, colors.black).txt}>{title}</Text>
      <View style={styles.iconBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerCtn: {
    marginTop: Platform.OS === 'ios' ? 0 : 30,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  iconBack: {
    height: 24,
    width: 24,
  },
});
