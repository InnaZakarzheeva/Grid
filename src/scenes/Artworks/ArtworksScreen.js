import React, {Component} from 'react';
import {Text, ActivityIndicator, FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {loadArtworks} from '../../data/actions/artworks';
import {colors, Container, Header} from '../styles';
import ArtworkItem from './components/ArtworkItem';
import StaggeredGrid from './components/StaggeredGrid';

class ArtworksScreen extends Component {
  componentDidMount = () => {
    this.props.loadArtworks();
  };

  renderArtworks = () => {
    const {artworks} = this.props;
    return (
      <StaggeredGrid
        items={artworks}
        renderItem={(artwork) => <ArtworkItem artwork={artwork} />}
        renderHeader={this.renderHeader}
      />
    );
  };

  renderHeader = () => <Header>Artworks</Header>;

  renderEmptyList = () => <Text>More artworks will appear soon :)</Text>;

  renderLoading = () => <ActivityIndicator size="large" color={colors.black} />;

  renderContent = () => {
    const {loading, artworks} = this.props;
    if (loading) {
      return this.renderLoading();
    } else if (!artworks.length) {
      return this.renderEmptyList();
    } else {
      return this.renderArtworks();
    }
  };

  render() {
    return <Container>{this.renderContent()}</Container>;
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks.items,
    error: state.artworks.error,
    loading: state.artworks.loading,
  };
};

export default connect(mapStateToProps, {loadArtworks})(ArtworksScreen);
