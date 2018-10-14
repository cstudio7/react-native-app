import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

class ListItemDetailsScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name.name
  });

  render() {
    if (this.props.isFocused) {
      this.props.openNameScreen();
    }

    const { name } = this.props.navigation.state.params;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>{name.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{name.meaning}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigationFocus(ListItemDetailsScreen);
