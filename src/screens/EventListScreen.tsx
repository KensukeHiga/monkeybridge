import React from "react";
import { Box, Text, FlatList, useColorMode } from "native-base";
import { mockEvents } from "models/EventsListMock";
import customTheme from "styles/customTheme";
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
  const { colorMode } = useColorMode();
  const customColor =
    colorMode === "dark" ? customTheme.colors.dark : customTheme.colors.light;

  return (
    <Box flex="1" safeArea>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" borderColor={customColor.border} p="4">
            <Text color={customColor.primary} fontWeight="bold">
              {item.title}
            </Text>
            <Text color={customColor.secondary} fontSize="xs">
              {item.date}
            </Text>
            <Text color={customColor.secondary} fontSize="xs">
              {item.location}
            </Text>
            <Text color={customColor.secondary} mt="2">
              {item.description}
            </Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};
