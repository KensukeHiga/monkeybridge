import axios, { AxiosResponse } from "axios";
import {
  UseQueryResult,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

// APIレスポンスの型定義
interface Event {
  event_id: number;
  title: string;
  catch: string;
  description: string;
  event_url: string;
  address: string;
  place: string;
  started_at: string;
  // 他の必要なフィールド...
}

interface FetchEventsResponse {
  events: Event[];
}

export const useFetchEvents = () => {
  return useSuspenseQuery<FetchEventsResponse>({
    queryKey: ["events"],
    queryFn: getEvents,
  });
};

const getEvents = async (): Promise<FetchEventsResponse> => {
  const result: AxiosResponse = await axios.get(
    "https://connpass.com/api/v1/event/",
    {
      params: { keyword: "React", ym: "202311" },
    }
  );
  const resultData: FetchEventsResponse = result.data;
  return resultData;
};
