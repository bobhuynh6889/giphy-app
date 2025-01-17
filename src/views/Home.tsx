import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, StyleSheet, SafeAreaView, Text } from 'react-native';
import GifCard from '../components/GifCard';
import TextInputCustomProps from '../components/TextInputCustom';
import NavigationService from '../navigation';
import Routes from '../navigation/Routes';
import { getTrendingGifs, searchGifs } from '../api/giphyApi';
import { GifCardModel, ResponseModel } from '../models';
import LoadingView from '../components/LoadingView';
import { customTxt } from '../constants/fontStyle';
import { colors } from '../constants/colors';
import Header from '../components/Header';
import Icons from '../../assets/icons';

const renderItemGifCard = ({ item }: any) => {
  return (
    <GifCard
      imageUrl={item?.images?.fixed_height?.url}
      title={item?.title}
      onPress={() => {
        NavigationService.navigate(Routes.FEEDBACK, { gifInfo: item });
      }}
    />
  );
};

const Home = () => {
  const [gifs, setGifs] = useState<ResponseModel['data']>([]);
  const [gifsSearch, setGifsSearch] = useState<ResponseModel['data']>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const getGifCards = async () => {
    setLoading(true);
    const response: ResponseModel | undefined = await getTrendingGifs(offset);
    setGifs((prev: []) => [...prev, ...(response?.data || [])]);
    setTotalCount(response?.pagination?.total_count || 0);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const searchGifCards = async () => {
    setLoading(true);
    const response: ResponseModel | undefined = await searchGifs(offset, searchTerm);
    if (searchTerm && response?.data?.length === 0) {
      setGifsSearch([]);
    } else {
      setGifsSearch((prev: []) => [...prev, ...(response?.data || [])]);
    }
    setTotalCount(response?.pagination?.total_count || 0);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (!searchTerm) {
      getGifCards();
    }
  }, [offset, searchTerm]);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(async () => {
      if (searchTerm) {
        searchGifCards();
      }
    }, 1000);
    return () => clearTimeout(debounceRef.current ?? 0);
  }, [searchTerm, offset]);

  const _onPressRemoveSearch = () => {
    setSearchTerm('');
  };

  const renderBody = () => {
    return (
      <View style={styles.ctnBody}>
        <View style={styles.searchInputCtn}>
          <TextInputCustomProps
            value={searchTerm}
            onChangeText={setSearchTerm}
            onPressRemove={_onPressRemoveSearch}
            icon={Icons.icRemove}
            placeHolderText={'Search GIF...'}
          />
        </View>
        {(searchTerm ? gifsSearch : gifs)?.length > 0 ? (
          <FlatList
            data={searchTerm ? gifsSearch : gifs}
            keyExtractor={(item: GifCardModel, index) =>
              `${item?.id} + ${index}`
            }
            renderItem={renderItemGifCard}
            onEndReached={
              offset >= totalCount ? null : () => setOffset((prev) => prev + 15)
            }
            onEndReachedThreshold={0.5}
            refreshing={loading}
            onRefresh={() => {
              searchTerm ? searchGifCards() : getGifCards();
            }}
          />
        ) : (
          <View style={styles.noDataView}>
            <Text style={customTxt('700', 18, colors.black).txt}>NO DATA</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'List gifs'} />
      {renderBody()}
      {loading && <LoadingView />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ctnBody: {
    paddingBottom: 50,
  },
  noDataView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputCtn: {
    marginHorizontal: 16,
  },
});

export default Home;
