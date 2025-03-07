import { Flex, Box, Card, Text, Avatar } from '@radix-ui/themes';
import Link from 'next/link';

export default function Home() {
  return (
    <Flex gap="3" direction="row" className="p-10">
      <Box width="350px">
        <Link href="/examples/movies">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="M" color="bronze" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Movie List Example
                </Text>
                <Text as="div" size="2" color="gray">
                  List movies from the OMDB API
                </Text>
              </Box>
            </Flex>
          </Card>
        </Link>
      </Box>

      <Box width="350px">
        <Link href="/examples/form">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="F" color="crimson" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Form Example
                </Text>
                <Text as="div" size="2" color="gray">
                  Email and question form
                </Text>
              </Box>
            </Flex>
          </Card>
        </Link>
      </Box>

      <Box width="350px">
        <Link href="movies">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="M" color="bronze" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Movie List
                </Text>
                <Text as="div" size="2" color="gray">
                List movies from the OMDB API
                </Text>
              </Box>
            </Flex>
          </Card>
        </Link>
      </Box>
    
    </Flex>
  );
}
