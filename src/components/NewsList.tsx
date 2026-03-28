import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NewsData } from '../utils/handle-api';
import NewsItem from './NewsItem';

interface NewsListProps {
  data: NewsData[];
}

export default function NewsList({ data }: NewsListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <NewsItem item={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});
