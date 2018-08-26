import React from 'react';
import { View, Text } from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile-rn';
import colors from 'constants/colors';

export default class BasicTabBarExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: colors.backgroundColor }}>
        <SearchBar placeholder="Search" />
        <Text style={{ margin: 50, color: colors.textColor }}>{pageText}</Text>
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        <TabBar.Item
          title="Broker"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}
        >
          {this.renderContent('Broker Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="Subscriber"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}
        >
          {this.renderContent('Subscriber Tab')}
        </TabBar.Item>
        <TabBar.Item
          
          title="Publisher"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}
        >
          {this.renderContent('Publisher Tab')}
        </TabBar.Item>
        <TabBar.Item
          
          title="About"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}
        >
          {this.renderContent('About Tab')}
        </TabBar.Item>
      </TabBar>
    );
  }
}