import React, { useState, useEffect } from "react";
import Simple from "./Navbar";
import DataTable from "../components/DataTable";
import { users } from "../utils/request";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
function Dashboard() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(function () {
      users().then((res) => {
        console.log(res);
        setDatas(res.data);
      });
      setLoading(false);
    }, 2000);
  }, []);

  const [datas, setDatas] = useState([]);

  const [loading, setLoading] = useState(true);
  return (
    <div>
      {token ? (
        <Simple
          children={
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th isNumeric>Phone</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {datas.map((item) => (
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td isNumeric>{item.phone}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          }
        />
      ) : (
        <div>Authorization required..</div>
      )}
    </div>
  );
}

export default Dashboard;
