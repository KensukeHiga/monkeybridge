import React, { FC, useState } from "react";
import { Box, Input, Button, FlatList, Text } from "native-base";

// タグの型定義
type Tag = {
  id: string;
  label: string;
};

// モックデータ
const mockTags: Tag[] = [
  { id: "1", label: "沖縄" },
  // 他のタグを追加
];

export const QuickSearchScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // タグを検索フォームに追加
  const handleTagPress = (tag: Tag) => {
    setSearchQuery(tag.label);
  };

  return (
    <Box flex={1} p={4}>
      <Input
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search events"
        // その他のInputのプロパティ
      />
      <FlatList
        data={mockTags}
        renderItem={({ item }) => (
          <Button onPress={() => handleTagPress(item)}>{item.label}</Button>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        mt={4}
        onPress={() => {
          /* ここにお気に入りイベントの処理を追加 */
        }}
      >
        {"お気に入り"}
      </Button>
    </Box>
  );
};
