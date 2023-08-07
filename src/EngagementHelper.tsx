import { Options, SeriesOptionsType } from "highcharts";
import { Channel, Message } from "./model";

const engagementMessageOverTimeChartOptions = (
  messageCountList: Message[],
  channels: Channel[]
): Options => {
  const groupedByChannelId: Record<string, Message[]> = messageCountList.reduce(
    (acc, item) => {
      const { channelId } = item;
      if (!acc[channelId]) {
        acc[channelId] = [];
      }
      acc[channelId].push(item);
      return acc;
    },
    {} as Record<string, Message[]>
  );

  const series: Array<SeriesOptionsType> = Object.keys(groupedByChannelId)
    .filter((channelId) => groupedByChannelId[channelId].length > 1)
    .map((channelId) => {
      const channel = channels.find((c) => c.value === channelId);
      const data = groupedByChannelId[
        channelId
      ].map(({ timeBucket, count }) => [
        new Date(timeBucket).getTime(),
        Number(count)
      ]);
      return {
        name: channel?.label || "",
        data
      } as SeriesOptionsType;
    });

  const chartOptions: Options = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Mercle Assignment"
    },
    series,
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%e %b",
        year: "%b"
      },
      crosshair: true,
      tickInterval: 24 * 3600 * 1000 // 1 day
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "{point.y} messages on {point.x:%e %b}"
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false
        }
      }
    }
  };

  return chartOptions;
};

export default engagementMessageOverTimeChartOptions;
