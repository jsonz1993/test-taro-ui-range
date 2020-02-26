import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtRange } from 'taro-ui'
import './index.scss'

interface IndexPageState {
  rangeValue: [number, number]
}

export default class Index extends Component<{}, IndexPageState> {

  constructor() {
    super()
    this.state = {
      rangeValue: [0, 10]
    }
  }

  config: Config = {
    navigationBarTitleText: 'AtRange Class Component'
  }

  handleChange(value: [number, number]) {
    this.setState({
      rangeValue: value
    })
    // console.log(`Range value: ${value[0]} - ${value[1]}`)
  }

  handleChangeValue() {
    this.setState({
      rangeValue: [0,100]
    })
  }

  render() {
    const { rangeValue } = this.state;
    return (
      <View className='index'>
        <Text>AtRange Class Component</Text>
        <AtRange min={0} max={100} value={rangeValue} onChange={this.handleChange.bind(this)} />
        <Text>Range value: {`${rangeValue[0]} - ${rangeValue[1]}`}</Text>
        <Text>先不要改变RangeValue，直接点按钮改变，就会重现</Text>
        <Button onClick={this.handleChangeValue.bind(this)}>Click</Button>
      </View>
    )
  }
}
