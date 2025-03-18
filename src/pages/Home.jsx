import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../redux/actions/productActions";
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

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      {/* Loading State */}
      {loading && (
        <Box display="flex" justifyContent="center">
          <Spinner size="xl" />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Alert status="error" mb={4}>
          <Text>{error}</Text>
        </Alert>
      )}

      {/* Products Grid */}
      {products?.length > 0 ? (
        <SimpleGrid columns={[1, 2, 3]} gap={10} padding={20}>
          {products.map((product) => (
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
              <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
            </VStack>
          ))}
        </SimpleGrid>
      ) : (
        !loading && !error && <Text>No products available.</Text>
      )}
    </div>
  );
};

export default Home;
