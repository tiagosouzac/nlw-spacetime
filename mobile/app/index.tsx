import { useEffect } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import * as SecureStore from 'expo-secure-store'

import {
  useFonts,
  Roboto_400Regular as RobotoRegular,
  Roboto_700Bold as RobotoBold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold as BaiJamjureeBold } from '@expo-google-fonts/bai-jamjuree'

import { api } from '../src/lib/api'
import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/3fdfa2962471e5f74e52',
}

const StyledStripes = styled(Stripes)

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    RobotoRegular,
    RobotoBold,
    BaiJamjureeBold,
  })

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '3fdfa2962471e5f74e52',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime',
      }),
    },
    discovery,
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', { code })

    const { token } = response.data
    SecureStore.setItemAsync('token', token)
    router.push('/memories')
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      handleGithubOAuthCode(code)
    }
  }, [handleGithubOAuthCode, response])

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
          onPress={() => signInWithGithub()}
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