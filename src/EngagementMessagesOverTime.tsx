import { messageCountList, channels } from "./data";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import engagementHelper from "./EngagementHelper";

const EngagementMessagesOverTime = () => {
  const options = engagementHelper(messageCountList, channels);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
