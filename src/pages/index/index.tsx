import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtRange } from 'taro-ui'
import './index.scss'

interface IndexPageState {
  rangeValue: [number, number]
}

export default class Index extends Component<{}, IndexPageState> {
  config: Config = {
    navigationBarTitleText: 'AtRange Class Component'
  }

  constructor() {
    super()
    this.state = {
      rangeValue: [0, 10]
    }
  }

  handleChange(value: [number, number]) {
    this.setState({
      rangeValue: value
    })
    // console.log(`Range value: ${value[0]} - ${value[1]}`)
  }

  render() {
    const { rangeValue } = this.state;
    return (
      <View className='index'>
        <Text>AtRange Class Component</Text>
        <AtRange min={0} max={100} value={rangeValue} onChange={this.handleChange.bind(this)} />
        <Text>Range value: {`${rangeValue[0]} - ${rangeValue[1]}`}</Text>
      </View>
    )
  }
}
