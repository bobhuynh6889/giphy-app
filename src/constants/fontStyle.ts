import { StyleSheet, TextStyle } from 'react-native';

export const customTxt = (
  fontWeight: TextStyle['fontWeight'],
  size: number,
  txtColor: string
) =>
  StyleSheet.create({
    txt: {
      fontFamily: 'Arial',
      fontWeight: fontWeight,
      fontSize: size,
      color: txtColor,
    },
  });
