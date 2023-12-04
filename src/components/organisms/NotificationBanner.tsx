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
import { FC } from "react";

type MeaasageStatus = "info" | "success" | "error";
export const NotificationBanner: FC<{
  mesStatus: MeaasageStatus;
  mesTitle: string;
  mesDetail: string;
}> = ({ mesStatus, mesTitle, mesDetail }) => {
  return (
    <Center>
      <Alert maxW="400" status={mesStatus} colorScheme={mesStatus}>
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
                {mesTitle}
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
            {mesDetail}
          </Box>
        </VStack>
      </Alert>
    </Center>
  );
};
