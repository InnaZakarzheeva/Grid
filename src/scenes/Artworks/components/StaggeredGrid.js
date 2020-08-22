import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {GridWrapper, GridContainer, GridSection} from '../../styles';

const SECTIONS_COUNT = 2;

function getMinimalValueIndex(array) {
  let minimalValueIndex = 0;
  let minimalValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimalValue) {
      minimalValue = array[i];
      minimalValueIndex = i;
    }
  }
  return minimalValueIndex;
}

export default class StaggeredGrid extends React.Component {
  buildSections() {
    const sectionedItems = [];
    const sectionHeights = [];
    for (let i = 0; i < SECTIONS_COUNT; i++) {
      sectionedItems.push([]);
      sectionHeights.push([]);
    }
    const items = this.props.items;
    for (let i = 0; i < items.length; i++) {
      const smallestSectionIndex = getMinimalValueIndex(sectionHeights);
      sectionedItems[smallestSectionIndex].push(items[i]);
      sectionHeights[smallestSectionIndex] += 1;
      if (this.props.requestItemHeight) {
        sectionHeights[smallestSectionIndex] +=
          this.props.requestItemHeight(items[i]) - 1;
      }
    }
    return sectionedItems;
  }

  renderSectionsWithMargins(sections) {
    const {sectionMargin} = this.props;
    const sectionsWithMargins = [];
    for (let i = 0; i < sections.length; i++) {
      sectionsWithMargins.push(sections[i]);
      if (i < sections.length - 1) {
        const marginView = (
          <View key={`margin-${i}`} style={{width: sectionMargin || 0}} />
        );
        sectionsWithMargins.push(marginView);
      }
    }
    return sectionsWithMargins;
  }

  renderSections() {
    if (!this.props.renderItem) {
      return;
    }
    const sectionedItems = this.buildSections();
    const sections = sectionedItems.map((section, sectionIndex) => {
      const sectionComponents = section.map((item, itemIndex) => (
        <View key={itemIndex}>{this.props.renderItem(item)}</View>
      ));
      return <GridSection key={sectionIndex}>{sectionComponents}</GridSection>;
    });
    return this.renderSectionsWithMargins(sections);
  }

  render() {
    const {contentPaddingTop} = this.props;
    return (
      <ScrollView
        contentContainerStyle={{width: Dimensions.get('screen').width}}>
        {this.props.renderHeader()}
        <GridWrapper>
          <View style={{height: contentPaddingTop}} />
          <GridContainer>{this.renderSections()}</GridContainer>
        </GridWrapper>
      </ScrollView>
    );
  }
}
