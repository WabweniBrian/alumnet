import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const Box = ({ className, ...props }) => (
  <StyledText
    className={`flex flex-1 text-center h-14 basis-[32] justify-center items-center text-white bg-fuchsia-500 rounded ${className}`}
    {...props}
  />
);

const StyledComponent = () => {
  return (
    <StyledView className="flex flex-row flex-wrap h-screen w-screen content-center items-center gap-2 overflow-hidden">
      <Box>01</Box>
      <Box>02</Box>
      <Box>03</Box>
      <Box>04</Box>
      <Box>05</Box>
      <Box>06</Box>
    </StyledView>
  );
};

export default StyledComponent;
