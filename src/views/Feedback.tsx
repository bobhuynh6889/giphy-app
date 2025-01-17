import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { AirbnbRating } from 'react-native-ratings';

import Header from '../components/Header';
import GifCard from '../components/GifCard';
import TextInputCustom from '../components/TextInputCustom';
import { colors } from '../constants/colors';
import { customTxt } from '../constants/fontStyle';
import Toast from 'react-native-toast-message';
import StorageService from '../utils/localStorage';
import { FeedbackModel } from '../models';
import LoadingView from '../components/LoadingView';

export default function Feedback({ route }: any) {
  const gifInfo = route?.params?.gifInfo;
  const [comment, setComment] = useState('');
  const [starRate, setStarRate] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    StorageService.getObject(gifInfo?.id).then((res: FeedbackModel | any) => {
      setComment(res?.comment || '');
      setStarRate(res?.rate);
    });
  }, []);

  const _onPressSubmit = () => {
    setLoading(true);
    if (!starRate) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please give a rating for this GIF.',
      });
      setLoading(false);
      return;
    }
    const feedbackGif = {
      rate: starRate,
      comment,
    };
    StorageService.saveObject(gifInfo?.id, feedbackGif);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Success, thank you for the rating.',
    });
  };

  const feedbackForm = () => {
    return (
      <View style={styles.feedbackForm}>
        <Text style={customTxt('500', 14, colors.black).txt}>Comment</Text>
        <TextInputCustom
          value={comment}
          onChangeText={setComment}
          placeHolderText={'Your comment'}
        />
        <AirbnbRating
          count={5}
          defaultRating={starRate || 0}
          size={36}
          onFinishRating={setStarRate}
        />
        <TouchableOpacity onPress={_onPressSubmit} style={styles.submitBtn}>
          <Text style={customTxt('600', 18, colors.blue).txt}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View>
        <GifCard
          imageUrl={gifInfo?.images?.fixed_height?.url}
          title={gifInfo?.title}
        />
        {feedbackForm()}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Gif details'} isGoBack />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardStyle}
      >
        <ScrollView contentContainerStyle={styles.keyboardCtn}>
          {renderBody()}
        </ScrollView>
      </KeyboardAvoidingView>
      {loading && <LoadingView />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ctnBody: {
    paddingBottom: 50,
  },
  keyboardStyle: {
    width: '100%',
    height: '100%',
  },
  keyboardCtn: {
    paddingBottom: 40,
  },
  feedbackForm: {
    marginBottom: 20,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
  },
  submitBtn: {
    marginTop: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.blue,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
