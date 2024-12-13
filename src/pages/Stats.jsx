import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import Error from "../ui/Error";

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid var(--color-grey-200);
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid var(--color-grey-200);
  padding: 8px;
`;

const Th = styled.th`
  border: 1px solid var(--color-grey-200);
  padding: 8px;

  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--color-grey-500);
  color: var(--color-grey-50);
`;

const H3 = styled.h3`
  margin: 2rem 0;
`;

function Stats() {
  const [countQueries, setCountQueries] = useState();
  const [top5, setTop5] = useState();
  const [last10, setLast10] = useState();
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(true);

  useEffect(function () {
    async function getStatsFromBackend() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(`http://127.0.0.1:3000/stats`);
        const data = await res.json();

        setCountQueries(data.count[0].count);
        setTop5(data.top5);
        setLast10(data.last10);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data from database");
      } finally {
        setIsLoading(false);
      }
    }
    getStatsFromBackend();
  }, []);

  if (isloading) return <Spinner />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <H3>Total number of queries: {countQueries} </H3>
      <H3>Top 5 the most searched cities:</H3>
      <Table>
        <tr>
          <Th>Lp.</Th>
          <Th>city</Th>
          <Th>count</Th>
        </tr>
        {top5.map((el, key) => (
          <tr key={el.city_name}>
            <Td>{key + 1}</Td>
            <Td>{el.city_name}</Td>
            <Td>{el.amount}</Td>
          </tr>
        ))}
      </Table>

      <H3>Last 10 searched cities:</H3>

      <Table>
        <tr>
          <Th>Lp.</Th>
          <Th>city</Th>
          <Th>date</Th>
          <Th>recommended activity</Th>
        </tr>
        {last10.map((el, key) => (
          <tr key={el.query_date}>
            <Td>{key + 1}</Td>
            <Td>{el.city_name}</Td>
            <Td>{el.query_date}</Td>
            <Td>{el.recommended_activity}</Td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default Stats;
