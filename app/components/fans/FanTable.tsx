import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function FanTable() {
  const fans = [
    { name: "Fan 1", email: "fan1username", joinedDate: "01/01/21" },
    { name: "Fan 2", email: "fan2username", joinedDate: "01/02/21" },
    { name: "Fan 3", email: "fan3username", joinedDate: "01/03/21" },
    { name: "Fan 4", email: "fan4username", joinedDate: "01/04/21" },
    { name: "Fan 5", email: "fan5username", joinedDate: "01/05/21" },
    { name: "Fan 6", email: "fan6username", joinedDate: "01/06/21" },
    { name: "Fan 7", email: "fan7username", joinedDate: "01/07/21" },
    { name: "Fan 8", email: "fan8username", joinedDate: "01/08/21" },
    { name: "Fan 9", email: "fan9username", joinedDate: "01/09/21" },
    { name: "Fan 10", email: "fan10username", joinedDate: "01/10/21" },
  ];
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Joined</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fans.map((fan, index) => (
            <Tr key={index}>
              <Td>{fan.name}</Td>
              <Td>{fan.email}</Td>
              <Td>{fan.joinedDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
