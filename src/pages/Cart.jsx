import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeFromCart } from "../redux/actions/productActions";
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
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  const navigate = useNavigate()

  
  return (
    <div>
      {/* Cart Items*/}
      {cart?.length > 0 ? (
        <VStack gap={10} padding={20}>
          {cart.map((product) => (
            <HStack key={product.id} boxShadow="md" p={4} borderRadius="md" width={'80%'}>
              <Image
                height={100}
                width={100}
                src={product.image}
                alt={product.title}
                borderRadius="md"
              />
              <Flex width={"100%"} justify={"space-between"} flexDirection={'column'}>
                <Heading size="md">{product.title}</Heading>
                <Text fontWeight="bold" color="green.500">
                  ${product.price}
                </Text>
              </Flex>
              <Button onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</Button>
            </HStack>
          ))}
          <HStack boxShadow="md" p={4} borderRadius="md" width={'80%'}>
              <Flex width={"100%"} justify={"space-between"} flexDirection={'column'}>
                <Heading size="md">Total: ${totalPrice.toFixed(2)}</Heading>
              </Flex>
              <Button onClick={() => navigate('/payment')}>Move to Payment</Button>
            </HStack>
        </VStack>
      ) : (
        <Text>No products in Cart</Text>
      )}
    </div>
  );
};

export default Cart;
