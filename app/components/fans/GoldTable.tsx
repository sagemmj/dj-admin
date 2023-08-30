import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function GoldTable() {
  const fans = [
    { name: "Fan 1", email: "fan1username", membership: "2" },
    { name: "Fan 2", email: "fan2username", membership: "2" },
    { name: "Fan 3", email: "fan3username", membership: "2" },
    { name: "Fan 4", email: "fan4username", membership: "2" },
    { name: "Fan 5", email: "fan5username", membership: "2" },
    { name: "Fan 6", email: "fan6username", membership: "2" },
    { name: "Fan 7", email: "fan7username", membership: "3" },
    { name: "Fan 8", email: "fan8username", membership: "4" },
    { name: "Fan 9", email: "fan9username", membership: "4" },
    { name: "Fan 10", email: "fan10username", membership: "5" },
  ];
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Membership</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fans.map((fan, index) => (
            <Tr key={index}>
              <Td>{fan.name}</Td>
              <Td>{fan.email}</Td>
              <Td>{fan.membership} months</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
