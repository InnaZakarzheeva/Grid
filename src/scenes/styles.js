import {View, Text} from 'react-native';
import styled from 'styled-components';

export const colors = {
  black: '#000000',
  grey: '#0007',
};

export const Container = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 45,
});

export const Header = styled(Text)({
  fontSize: 32,
  fontWeight: '500',
  height: 40,
  paddingLeft: 10,
  marginBottom: 10,
  width: '90%',
  alignSelf: 'center',
});

export const ImageWrapper = styled(View)({
  borderRadius: 4,
  shadowColor: colors.black,
  shadowOpacity: '3px',
  shadowRadius: 3,
  shadowOffset: {height: 5},
  elevation: '2px',
  margin: 5,
  marginBottom: 0,
});

export const Label = styled(Text)({
  paddingLeft: 10,
  maxWidth: 150,
  color: colors.black,
  fontSize: 14,
  fontWeight: '500',
});

export const Wrapper = styled(View)({
  marginBottom: 24,
  marginHorizontal: 8,
});

export const GridWrapper = styled(View)({
  marginHorizontal: 8,
  marginVertical: 16,
});

export const GridContainer = styled(View)({
  flexDirection: 'row',
});

export const GridSection = styled(View)({
  flexDirection: 'column',
  flex: 1,
});
