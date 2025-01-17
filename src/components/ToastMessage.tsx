import React from 'react';
import { StyleSheet } from 'react-native';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastProps,
  BaseToastProps,
  ToastConfig,
} from 'react-native-toast-message';
import { customTxt } from '../constants/fontStyle';
import { colors } from '../constants/colors';

const toastConfig: ToastConfig = {
  success: (props: BaseToastProps): React.ReactNode => (
    <BaseToast
      {...props}
      style={styles.successToast}
      contentContainerStyle={styles.contentContainer}
      text1Style={customTxt('700', 12, colors.green).txt}
      text2Style={customTxt('400', 15, colors.black).txt}
      text2NumberOfLines={3}
    />
  ),
  error: (props: BaseToastProps): React.ReactNode => (
    <ErrorToast
      {...props}
      style={styles.errorToast}
      text1Style={customTxt('700', 12, colors.error).txt}
      text2Style={customTxt('400', 15, colors.black).txt}
      text2NumberOfLines={3}
    />
  ),
};

const ToastMessage: React.FC<ToastProps> = (props): React.JSX.Element => {
  return <Toast config={toastConfig} position={'top'} topOffset={40} />;
};

export default ToastMessage;

const styles = StyleSheet.create({
  successToast: {
    borderLeftColor: colors.green,
    height: 60,
  },
  errorToast: {
    borderLeftColor: colors.error,
    height: 60,
  },
  contentContainer: {
    paddingHorizontal: 13,
  },
});
