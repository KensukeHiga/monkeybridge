import { extendTheme } from "native-base";

export const customTheme = extendTheme({
  config: {
    useSystemColorMode: true, // システムのカラーモード設定を使用
  },
  colors: {
    // ライトモードの色定義
    light: {
      background: "#ffffff",
      text: "#1f2937",
      primary: "#002851", // 濃いアンバー（amber.900）
      secondary: "#1f2937", // 灰色
      border: "#e5e7eb",
      // その他必要な色をここに追加
    },
    // ダークモードの色定義
    dark: {
      background: "#111827",
      text: "#f8fafc",
      primary: "#fbbf24", // 明るいアンバー（amber.400）
      secondary: "#f3f4f6", // 明るい灰色
      border: "#374151",
      // その他必要な色をここに追加
    },
  },
  // 他のカスタムスタイルやコンポーネントのスタイルオーバーライドもここに追加できます。
});

export default customTheme;
