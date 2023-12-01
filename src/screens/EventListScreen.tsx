import React, { FC, Suspense } from "react";
import { Box, Text, FlatList, useColorMode, StatusBar } from "native-base";
import { mockEvents } from "models/EventsListMock";
import customTheme from "styles/customTheme";
import { useFetchEvents } from "hooks/useFetchEvents";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { format } from "date-fns";
import { ToggleDarkMode } from "components/molecules/ToggleDarkMode";
import { NotificationBanner } from "components/organisms/NotificationBanner";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * NativeBaseProviderが提供する機能（useColorMode）を使用するためSafeAreaView以下をrootに分離した。
 * @returns Root
 */
export const EventListScreen: FC = () => {
  const { colorMode } = useColorMode();
  const bgColor =
    colorMode === "dark"
      ? customTheme.colors.dark.background
      : customTheme.colors.light.background;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: bgColor,
      }}
    >
      <Box>
        <Box style={styles.headerContainer}>
          <Box style={{ flex: 1 }} /> {/* 空のBoxで左側のスペースを作成 */}
          <ToggleDarkMode />
        </Box>
        <NotificationBanner />
        <EventListRoot />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10, // 適宜調整
    width: "100%",
  },
});

/**
 * `EventListScreen` コンポーネントは、イベントの一覧を表示する画面です。
 * 各イベントはタイトル、日付、場所、および説明を含むボックスでリスト表示されます。
 *
 * TODO: 現在、モックデータ (`mockEvents`) を使用していますが、将来的にはAPIから取得したイベントデータに置き換える予定です。
 *
 * @returns React コンポーネント
 */
export const EventListRoot = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Suspense fallback={<Text>loading...</Text>}>
        <EventListComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

const ErrorComponent = ({ error }: FallbackProps) => {
  return <Text>{error.message}</Text>;
};

export const EventListComponent = () => {
  /* TODO:APIから取得したイベントデータの配列に置き換える */
  const { data } = useFetchEvents();
  const events = mockEvents;
  const { colorMode } = useColorMode();
  const customColor =
    colorMode === "dark" ? customTheme.colors.dark : customTheme.colors.light;

  return (
    <Box flex="1" safeArea>
      <FlatList
        data={data.events}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" borderColor={customColor.border} p="4">
            <Text color={customColor.primary} fontWeight="bold">
              {item.title}
            </Text>
            <Text color={customColor.secondary} fontSize="xs">
              {/* {item.started_at} */}
              {format(new Date(item.started_at), "yyyy年MM月dd日") ||
                "undefined"}
            </Text>
            <Text color={customColor.secondary} fontSize="xs">
              {item.address}
              {"/"}
              {item.place}
            </Text>
            <Text color={customColor.secondary} mt="2">
              {item.catch}
            </Text>
          </Box>
        )}
        keyExtractor={(item) => String(item.event_id)}
      />
    </Box>
  );
};
