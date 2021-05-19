import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      m={2}
      style={{ cursor: 'pointer' }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt={track.title}
        style={{ height: '64px', width: '64px' }}
      />
      <Box ml={3}>
        <Text as="h6">{track.title}</Text>
        <Text>{track.artist}</Text>
      </Box>
    </Flex>
  )
}
