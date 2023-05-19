import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular as RobotoRegular,
  Roboto_700Bold as RobotoBold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold as BaiJamjureeBold } from '@expo-google-fonts/bai-jamjuree'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    RobotoRegular,
    RobotoBold,
    BaiJamjureeBold,
  })

  if (!hasLoadedFonts) return null

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="font-alt text-5xl font-bold text-white">
        Hello, World!
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
