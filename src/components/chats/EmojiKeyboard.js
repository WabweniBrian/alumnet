// import { View, Text } from "react-native";
import EmojiBoard from "react-native-emoji-board";

const EmojiKeyboard = () => {
  const [show, setShow] = useState(true);
  const onClick = (emoji) => {
    console.log(emoji);
  };
  return (
    // <EmojiBoard
    //   onEmojiSelected={onEmojiSelected}
    //   showBoard={showEmojiBoard}
    //   showSearchBar={true}
    //   showHistory={true}
    //   showSectionTitles={true}
    //   showDivider={true}
    //   showCloseButton={true}
    //   showTrending={true}
    //   containerStyle={{ backgroundColor: "white" }}
    // />
    <EmojiBoard showBoard={show} onClick={onClick} />
  );
};

export default EmojiKeyboard;
