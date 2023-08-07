export interface Message {
  count: string;
  timeBucket: string;
  channelId: string;
}

export interface Channel {
  label: string;
  value: string;
  [key: string]: unknown;
}
