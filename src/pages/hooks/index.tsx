import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtRange } from 'taro-ui'

const Index: Taro.FC = () => {
  const [rangeValue, setRangeValue] = useState<[number, number]>([0, 10]);

  setTimeout(() => setRangeValue([20, 68]), 3000)

  const handleChange = (value: [number, number]) => {
    setRangeValue(value)
    // console.log(`Range value: ${value[0]} - ${value[1]}`)
  }

  return (
    <View className='index'>
      <Text>AtRange Hooks</Text>
      <AtRange min={0} max={100} value={rangeValue} onChange={handleChange} />
      <Text>Range value: {`${rangeValue[0]} - ${rangeValue[1]}`}</Text>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: 'AtRange Hooks'
}

export default Index;
