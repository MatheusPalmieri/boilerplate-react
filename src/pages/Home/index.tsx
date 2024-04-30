import { Container, Flex, Text } from '@mantine/core';

export const Home = () => (
  <Container>
    <Flex h='100dvh' direction='column' align='center' justify='center'>
      <Text fz='h1' fw='bold'>
        Boilerplate React{' '}
        <Text span fz='h1' c='green.6'>
          0.0.1
        </Text>
      </Text>
    </Flex>
  </Container>
);
