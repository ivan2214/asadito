import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [persona, setPersona] = useLocalStorage("persona", []);
  const [input, setInput] = useState({
    name: "",
    apellido: "",
  });
  const onChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setPersona([...persona, input]);

    setInput({
      name: "",
      apellido: "",
    });
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      minH="100vh"
      bg="gray.900"
    >
      <Flex
        direction="row"
        align="center"
        justify="center"
        width="100%"
        minH="100vh"
        wrap="wrap"
        padding="20"
      >
        <form style={{ width: "70%" }} onSubmit={(e) => onSubmit(e)}>
          <Flex direction="column" width="100%" gap="5">
            <Box>
              <FormLabel htmlFor="name" color="whiteAlpha.900">
                Nombre del gay
              </FormLabel>
              <Input
                value={input.name}
                id="name"
                color="whiteAlpha.900"
                name="name"
                onChange={(e) => onChange(e)}
                type="text"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="apellido" color="whiteAlpha.900">
                apellido del payo
              </FormLabel>
              <Input
                value={input.apellido}
                id="apellido"
                color="whiteAlpha.900"
                name="apellido"
                onChange={(e) => onChange(e)}
                type="text"
              />
            </Box>
            {input.name.length > 2 ? (
              <Button colorScheme="whatsapp" type="submit">
                agregar
              </Button>
            ) : (
              <Button disabled colorScheme="whatsapp" type="submit">
                agregar
              </Button>
            )}
          </Flex>
        </form>

        <Container bg="gray.900">
          {persona.map((e, i) => {
            return (
              <Box key={i}>
                <Text
                  textTransform="capitalize"
                  color="whiteAlpha.900"
                  fontSize="lg"
                >
                  😋🎉 {e.name} {e.apellido}
                </Text>
              </Box>
            );
          })}
        </Container>
      </Flex>
    </Flex>
  );
}

export default App;
