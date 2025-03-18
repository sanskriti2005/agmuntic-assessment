import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Spinner,
  Alert,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Button,
  VStack,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.product);

  let countOfCartProducts = cart.length;
  return (
    <Flex gap={5}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/cart">
        Cart
        <Button padding={0} borderRadius="full" height="1.5rem" width="1rem">
          {countOfCartProducts}
        </Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
