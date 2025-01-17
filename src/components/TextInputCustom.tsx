import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { colors } from '../constants/colors';

interface TextInputCustomProps {
  value: string;
  onChangeText: (text: string) => void;
  onPressRemove?: () => void;
  icon?: ImageSourcePropType;
  placeHolderText?: string;
}

const TextInputCustom: React.FC<TextInputCustomProps> = ({
  value,
  onChangeText,
  onPressRemove,
  icon,
  placeHolderText,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeHolderText}
      value={value}
      onChangeText={onChangeText}
      multiline
    />
    {value && icon && (
      <TouchableOpacity onPress={onPressRemove} style={styles.iconContainer}>
        <Image source={icon} style={styles.iconRemove} />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.75,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 4,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: colors.black,
  },
  iconContainer: {
    marginLeft: 8,
  },
  iconRemove: {
    height: 24,
    width: 24,
  },
});

export default TextInputCustom;
