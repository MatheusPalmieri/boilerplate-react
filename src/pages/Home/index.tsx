import { Container, Flex, Text } from "@mantine/core";

export const Home = () => (
  <Container>
    <Flex h="100dvh" direction="column" align="center" justify="center">
      <Text fz="h1" fw="bold">
        Boilerplate React 0.0.1
      </Text>

      <Text fz="h2">
        Welcome to{" "}
        <Text span fz="h2" fw="bold" c="primary.5">
          Btix
        </Text>
        !
      </Text>
    </Flex>
  </Container>
);
