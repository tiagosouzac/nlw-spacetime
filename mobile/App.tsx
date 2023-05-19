import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'

import {
  useFonts,
  Roboto_400Regular as RobotoRegular,
  Roboto_700Bold as RobotoBold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold as BaiJamjureeBold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    RobotoRegular,
    RobotoBold,
    BaiJamjureeBold,
  })

  if (!hasLoadedFonts) return null

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StatusBar style="light" translucent />

      <StyledStripes className="absolute bottom-12 left-2 top-12" />

      <View className="max-w-xs flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>

          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-sn text-center font-body leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </ImageBackground>
  )
}
