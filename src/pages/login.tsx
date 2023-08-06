import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const Login = () => {
  const router = useRouter();

  return (
    <Flex bg="blue.100" h="100vh">
      <Text>Login Page</Text>
      <Button onClick={() => router.push("/dashboard")}>Test</Button>
    </Flex>
  );
};

export default Login;
