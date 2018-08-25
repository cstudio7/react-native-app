import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Loadable from 'react-loadable';

const TopTab = Loadable({
  loader: () => import('../components/TopTab/TopTab'),
  loading: () => <Text>Loading...</Text>
});

function WithTopBar(WrappedComponent) {
  return class extends React.Component {
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
          <TopTab
            tabs={[
              {
                name: 'Женские имена',
                onPress: this.openFemaleTab,
                isActive: isFemaleTabActive
              },
              {
                name: 'Мужские имена',
                onPress: this.openMaleTab,
                isActive: !isFemaleTabActive
              }
            ]}
          />
          <WrappedComponent
            isFemaleTabActive={this.state.isFemaleTabActive}
            {...this.props}
          />
        </SafeAreaView>
      );
    }
  };
}

export default WithTopBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  }
});
