import React from "react";
import { Box, Text, FlatList } from "native-base";
/**
 * `EventListScreen` コンポーネントは、イベントの一覧を表示する画面です。
 * 各イベントはタイトル、日付、場所、および説明を含むボックスでリスト表示されます。
 *
 * TODO: 現在、モックデータ (`mockEvents`) を使用していますが、将来的にはAPIから取得したイベントデータに置き換える予定です。
 *
 * @returns React コンポーネント
 */
export const EventListScreen = () => {
  /* TODO:APIから取得したイベントデータの配列に置き換える */
  const events = mockEvents;

  return (
    <Box flex="1" safeArea>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" borderColor="coolGray.200" p="4">
            <Text fontWeight="bold">{item.title}</Text>
            <Text color="coolGray.600" fontSize="xs">
              {item.date}
            </Text>
            <Text color="coolGray.600" fontSize="xs">
              {item.location}
            </Text>
            <Text mt="2">{item.description}</Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

const mockEvents = [
  {
    id: "1",
    title: "React Native Workshop",
    date: "2023-01-15",
    location: "Tokyo",
    description: "Learn about React Native development.",
  },
  {
    id: "2",
    title: "JavaScript Conference",
    date: "2023-02-20",
    location: "Osaka",
    description: "Join us to explore advanced JavaScript topics.",
  },
  {
    id: "3",
    title: "Mobile App Design Trends",
    date: "2023-03-05",
    location: "Kyoto",
    description: "Discover the latest trends in mobile app design.",
  },
  // 他のモックイベントデータを追加することができます
];
