import React from 'react';
import {Image, Animated, Dimensions} from 'react-native';

export default class extends React.Component {
  static defaultProps = {
    fading: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      width: props.originalWidth || props.width,
      height: props.originalHeight || props.height,
      fadeAnim: new Animated.Value(props.fading ? 0 : 1),
    };
  }

  componentDidMount() {
    if (this.props.originalWidth && this.props.originalHeight) {
      return;
    }
    if (!this.props.source.uri) {
      return;
    }

    Image.getSize(this.props.source.uri, (originalWidth, originalHeight) => {
      this.setState({originalWidth, originalHeight});
    });
  }

  _onLoad = () => {
    if (this.props.fading) {
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  };

  render() {
    const {style, fading, ...props} = this.props;
    const {width, height, fadeAnim} = this.state;
    const horizontalMargin = 16;
    const marginBetweenItems = 8;
    const itemWidth =
      Dimensions.get('window').width / 2 -
      horizontalMargin -
      marginBetweenItems;

    return (
      <Animated.View
        {...props}
        style={[
          fading ? {opacity: fadeAnim} : null,
          {
            aspectRatio: width / height,
            width: itemWidth,
          },
          style,
        ]}>
        <Image
          {...props}
          style={{flex: 1, width: null, height: null, borderRadius: 4}}
          onLoad={this._onLoad}
        />
      </Animated.View>
    );
  }
}
