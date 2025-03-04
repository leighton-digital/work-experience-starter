import { Flex, Box, Card, Text, Avatar } from '@radix-ui/themes';

export default function Home() {
  return (
    <Flex gap="3" direction="column">
      <Box width="350px">
        <Card size="1">
          <Flex gap="3" align="center">
            <Avatar size="3" radius="full" fallback="T" color="indigo" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>

      <Box width="400px">
        <Card size="2">
          <Flex gap="4" align="center">
            <Avatar size="4" radius="full" fallback="T" color="indigo" />
            <Box>
              <Text as="div" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>

      <Box width="500px">
        <Card size="3">
          <Flex gap="4" align="center">
            <Avatar size="5" radius="full" fallback="T" color="indigo" />
            <Box>
              <Text as="div" size="4" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="4" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Flex>
  );
}
