import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function PayoutHistory() {
  return (
    <Flex
      bg="#ffffff"
      borderRadius="10px"
      overflow="hidden"
      border="1px solid #111111"
    >
      <TableContainer
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
        overflowY="auto"
        fontSize="16px"
      >
        <Table variant="simple" overflow="auto" maxH="calc(100vh - 260px)">
          <Thead position="sticky" top="0" color="#fff" bg="black">
            <Tr>
              <Th color={"white"}>Amount</Th>
              <Th color={"white"}>Date</Th>
              <Th color={"white"}> Method</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>$200.00</Td>
              <Td>11/10/2023</Td>
              <Td>Stripe</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
