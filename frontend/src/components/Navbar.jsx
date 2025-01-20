import { Flex, Container, HStack, Link, Text } from "@chakra-ui/react";

export default function Navbar(){
    return(
        <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            h={16}
        >
            <Text
                fontSize={22}
                fontWeight={"bold"}
            >
                <Link textDecoration={"none"} href={"/"}>Dovel Enterprise</Link>
            </Text>
            <HStack>
                <Link href={"/"}>Home</Link>
                <Link href={"/new"}>Add Employee</Link>
            </HStack>
        </Flex>
    )
}