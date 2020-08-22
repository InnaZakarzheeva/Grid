/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import FitImage from './FitImage';
import {colors, ImageWrapper, Label, Wrapper} from '../../styles';

export default ({artwork}) => (
  <Wrapper>
    <ImageWrapper>
      <FitImage
        fading
        orientation="vertical"
        originalWidth={artwork.image.width}
        originalHeight={artwork.image.height}
        source={{uri: artwork.image.url}}
      />
    </ImageWrapper>
    <View style={{marginTop: 16}}>
      <Label>{artwork.title}</Label>
      <Label style={{color: colors.grey}}>${artwork.price}</Label>
    </View>
  </Wrapper>
);
