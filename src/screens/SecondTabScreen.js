import React, {Component} from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform

} from 'react-native';

export default class SecondTabScreen extends Component {


  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit'
      },
      {
        icon: require('../../img/navicon_add.png'),
        id: 'add'
      }
    ]
  };
  
  static navigatorStyle = {
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };
  constructor(props) {
    super(props);
    this.buttonsCounter = 0;
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={ this.onChangeButtonsPress.bind(this) }>
          <Text style={styles.button}>Change Buttons</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onChangeTitlePress.bind(this) }>
          <Text style={styles.button}>Change Title</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onSwitchTabPress.bind(this) }>
          <Text style={styles.button}>Switch To Tab#1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onSetTabBadgePress.bind(this) }>
          <Text style={styles.button}>Set Tab Badge</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onToggleTabsPress.bind(this) }>
          <Text style={styles.button}>Toggle Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPushPress.bind(this)}>
          <Text style={styles.button}>Push Plain Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPushStyledPress.bind(this)}>
          <Text style={styles.button}>Push Styled Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onModalPress.bind(this)}>
          <Text style={styles.button}>Show Modal Screen</Text>
        </TouchableOpacity>

        {
          Platform.OS === 'ios' ?
            <TouchableOpacity onPress={this.onLightBoxPress.bind(this)}>
              <Text style={styles.button}>Show LightBox</Text>
            </TouchableOpacity> : false
        }

        {
          Platform.OS === 'ios' ?
            <TouchableOpacity onPress={this.onInAppNotificationPress.bind(this)}>
              <Text style={styles.button}>Show In-App Notification</Text>
            </TouchableOpacity> : false
        }

        <TouchableOpacity onPress={this.onInfiniteListPress.bind(this)}>
          <Text style={styles.button}>Show infiniteListScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onTimeLinePress.bind(this)}>
          <Text style={styles.button}>Show TimeLine</Text>
        </TouchableOpacity>

      </View>
    );
  }
  onChangeTitlePress() {
    this.props.navigator.setTitle({
      title: Math.round(Math.random() * 100000).toString()
    });
  }
  onChangeButtonsPress() {
    let buttons;
    if (this.buttonsCounter % 3 == 0) {
      buttons = [
        {
          title: 'Edit',
          id: 'edit',
          disabled: true
        },
        {
          icon: require('../../img/navicon_add.png'),
          id: 'add'
        }
      ];
    } else if (this.buttonsCounter % 3 == 1) {
      buttons = [{
        title: 'Save',
        id: 'save'
      }];
    } else {
      buttons = [];
    }
    this.buttonsCounter++;

    this.props.navigator.setButtons({
      rightButtons: buttons,
      animated: true
    });
  }
  onSwitchTabPress() {
    this.props.navigator.switchToTab({
      tabIndex: 0
    });
  }
  onSetTabBadgePress() {
    this.props.navigator.setTabBadge({
      badge: '\r',
      fontSize: 10
    });
  }
  onToggleTabsPress() {
    this.props.navigator.toggleTabs({
      to: this.tabsHidden ? 'shown' : 'hidden'
    });
    this.tabsHidden = !this.tabsHidden;
  }
  onNavigatorEvent(event) {
    // handle a deep link
    if (event.type == 'DeepLink') {
      const parts = event.link.split('/');
      if (parts[0] == 'tab2') {
        this.props.navigator.switchToTab({
          tabIndex: 1
        });

        // this.props.navigator.resetTo({
        //   title: "Screen Two",
        //   screen: parts[1],
        //   animated: true
        // });
      }
    }
    // handle a button press
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'edit') {
        Alert.alert('NavBar', 'Dynamic Edit button pressed');
      }
      if (event.id == 'add') {
        Alert.alert('NavBar', 'Dynamic Add button pressed');
      }
      if (event.id == 'save') {
        Alert.alert('NavBar', 'Dynamic Save button pressed');
      }
    }
  }


  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }

  onPushStyledPress() {
    this.props.navigator.push({
      title: "Styled",
      screen: "example.StyledScreen"
    });
  }

  onModalPress() {
    this.props.navigator.push({
      title: "Modal",
      screen: "example.ModalScreen"
    });
  }

  onLightBoxPress() {
    this.props.navigator.showLightBox({
      screen: "example.LightBoxScreen",
      style: {
        backgroundBlur: "dark"
      },
      passProps: {
        greeting: 'hey there'
      },
    });
  }

  onInAppNotificationPress() {
    this.props.navigator.showInAppNotification({
      screen: "example.NotificationScreen"
    });
  }

  onInfiniteListPress() {
    this.props.navigator.push({
      title: "Styled",
      screen: "example.infiniteListScreen"
    });
  }

  onTimeLinePress() {
    this.props.navigator.push({
      title: "Styled",
      screen: "example.TimeLineScreen"
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
