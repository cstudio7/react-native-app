import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Loadable from 'react-loadable';
import Tabs from './Tabs/Tabs';

const Tab = Loadable({
  loader: () => import('../components/Tab/Tab'),
  loading: () => <Text>Loading...</Text>
});

function WithTabs(WrappedComponent) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isFemaleTabActive: true
      };
    }

    openFemaleTab = () => {
      this.setState({ isFemaleTabActive: true });
    };

    openMaleTab = () => {
      this.setState({ isFemaleTabActive: false });
    };

    render() {
      const { isFemaleTabActive } = this.state;

      return (
        <SafeAreaView style={styles.container}>
          <Tabs>
            <Tab
              tab={{
                name: 'Девочки',
                onPress: this.openFemaleTab,
                isActive: isFemaleTabActive
              }}
            />
            <Tab
              tab={{
                name: 'Мальчики',
                onPress: this.openMaleTab,
                isActive: !isFemaleTabActive
              }}
            />
          </Tabs>

          <WrappedComponent
            isFemaleTabActive={this.state.isFemaleTabActive}
            {...this.props}
          />
        </SafeAreaView>
      );
    }
  };
}

export default WithTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  }
});
