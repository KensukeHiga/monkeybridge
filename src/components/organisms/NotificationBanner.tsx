import {
  Center,
  Box,
  CloseIcon,
  IconButton,
  HStack,
  VStack,
  Text,
  Alert,
} from "native-base";

export function NotificationBanner() {
  return (
    <Center>
      <Alert maxW="400" status="info" colorScheme="info">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {"Dev TODO:"}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: "coolGray.600",
              }}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: "coolGray.600",
            }}
          >
            {"外部APIを使用して検索結果の取得"}
          </Box>
        </VStack>
      </Alert>
    </Center>
  );
}
