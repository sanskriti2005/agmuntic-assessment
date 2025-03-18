import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
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
} from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useSelector((state) => state.product);
  return (
    <div>
      {/* Cart Grid */}
      {cart?.length > 0 ? (
        <SimpleGrid columns={[1, 2, 3]} gap={10} padding={20}>
          {cart.map((product) => (
            <VStack key={product.id} boxShadow="md" p={4} borderRadius="md">
              <Image
                src={product.image}
                alt={product.title}
                borderRadius="md"
              />
              <Flex width={"100%"} justify={"space-between"}>
                <Heading size="md">{product.title}</Heading>
                <Text fontWeight="bold" color="green.500">
                  ${product.price}
                </Text>
              </Flex>
            </VStack>
          ))}
        </SimpleGrid>
      ) : (
        <Text>No products in Cart</Text>
      )}
    </div>
  );
};

export default Cart;
