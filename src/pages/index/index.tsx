import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { ChatClient, ChatOptions } from 'react-native-chat-sdk';
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount() {
    ChatClient.getInstance()
      .init(
        new ChatOptions({
          appKey: "81446724#514456",
          autoLogin: false,
          debugModel: true,
        })
      )
      .then(() => {
        console.log("init success");
      })
      .catch((error) => {
        console.log("init fail: ", error);
      });

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
