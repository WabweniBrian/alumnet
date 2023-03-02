import moment from "moment";
import { Text } from "react-native";

const LastMessage = ({ date }) => {
  const formattedDate = moment(date).calendar(null, {
    sameDay: () => `[${moment(date).format("h:mm A")}]`,
    lastDay: "[Yesterday]",
    lastWeek: "dddd",
    sameElse: "MMM DD, YYYY",
  });

  return <Text tw="text-[#982529] text-sm">{formattedDate}</Text>;
};

export default LastMessage;
