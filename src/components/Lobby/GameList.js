import React from 'react';
import styled, { css } from "styled-components";

const StyledTable = styled.table`  
  padding: 25px;
  caption-side: top;
  border: white thin;
  border-style: solid;
  border-collapse: collapse;
  border-spacing: 5px 10px;

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    padding: 15px;
    border: none;
    font-size: x-large;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    font-size: medium;
    :nth-of-type(odd) {
      background-color: #6766664d;
    }
    :hover {
      background-color: lightgreen;
    }
  }
  thead > tr {
    background-color: #9e9e9e73;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
const Table = ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
    <tr>
      {titles.map((title, index) => (
        <th key={index}>{title}</th>
      ))}
    </tr>
    </thead>
    <tbody>
    {data.map((item, index) => (
      <tr key={index}>
        {titles.map((title, index) => (
          <td key={index}>{item[title]}</td>
        ))}
      </tr>
    ))}
    </tbody>
  </StyledTable>
);


export const CenterV = css`
  display: flex;
  align-items: center;
`;

export const CenterH = css`
  display: flex;
  justify-content: center;
`;

export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.V ? CenterV : "")}
  ${props => (props.H ? CenterH : "")}
`;


function GameList(props) {
  let data = props.gameList.map(g => ({
    Name : g.name,
    Status : g.status,
    Pot : g.pot,
    Players : g.players ? g.players.length : 0,
    Join : (<button onClick={() => props.onGameSelect(g)}>Join</button>)
  }))


  console.log(data)
  return (
    <div className="gamelist">
      <h1>Ongoing Games</h1>
      <Center V H>
        <Table data={data} onGameSelect={props.onGameSelect} />
      </Center>
    </div>
  )
}

export default GameList