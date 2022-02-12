import React from 'react';
import { Text } from 'react-native';
import dayjs from 'dayjs';
// import FastImage, { FastImageProps } from 'react-native-fast-image';

interface AppImageProps {

}

const AppImage: React.FC<AppImageProps> = ({  }) => {
  const time = dayjs('2022-02-13').toString()
  return <Text>Hi, {time}</Text>;
};

export default AppImage;
