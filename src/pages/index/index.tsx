import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtRange } from 'taro-ui'
import './index.scss'

interface IndexPageState {
  active: boolean
}

export default class Index extends Component<{}, IndexPageState> {

  constructor() {
    super()
    this.state = {
      active: false,
    }
  }

  config: Config = {
    navigationBarTitleText: 'AtRange Class Component'
  }

  handleToggleActive() {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render() {
    const { active } = this.state;
    return (
      <View className='index'>
        <Text>第一条Range失效，原因是目前taro-ui AtRange只在CMD会计算stype(left,width)</Text>
        <View className={active? 'show': 'hide'}>
        <View className='br' />
          <AtRange />
          <View className='br' />
          {
            active && <AtRange />
          }
          <View className='br' />
        </View>
        <Button onClick={this.handleToggleActive.bind(this)}>Toggle</Button>
      </View>
    )
  }
}
