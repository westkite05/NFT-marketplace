import { Container, Heading, Text } from "@chakra-ui/react"
import { useAddress } from "@thirdweb-dev/react"

export default function Info() {
  const address = useAddress()

  return (
    <Container maxW={"1200px"} p={5} bg="yellow.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by westkite23. <br />
        deployed by using 0x6176FD96EbF3b59453aE47b2c576f9E8410dD737 (Account 2){" "}
        <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0xf2981F3952603181F4E967F4F02F9BcA782ffbAb{" "}
        <br />
        - NFT_COLLECTION_ADDRESS : 0x514C272ff7FD8f1Dd881517CC99bDF313C71CCB7
        <br />
        - TOKEN_DROP_ADDRESS : 0x50511e46A1fd68485325d11aAc0a4B52c27ed987 <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  )
}
