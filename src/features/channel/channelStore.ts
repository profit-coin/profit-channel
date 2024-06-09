import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { channels } from '../../mocks/channels'
import { Channel } from './types'

// NOTE: We don't use this store in the app yet

type ChannelState = {
  channelsList: Channel[]
  setChannelsList: (channels: Channel[]) => void
}

export const useChannelStore = create<ChannelState>()(
  devtools(
    set => ({
      channelsList: [],

      fetchChannels: async () => {
        const channelsList = channels
        set({ channelsList })
      },
      setChannelsList: (channels: Channel[]) => set(() => ({ channelsList: channels })),
    }),
    { name: 'channelStore' },
  ),
)
