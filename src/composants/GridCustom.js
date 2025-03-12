import { useState } from 'react'
import * as React from 'react'
import { DataTable } from 'react-native-paper'

const GridCustom = ({ score }) => {
  const [page, setPage] = useState(0)
  const [numberOfItemsPerPageList] = useState([2, 3, 4])
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0])

  const [items] = useState([
    {
      key: 1,
      name: 'Input name',
      score: score
    }
  ])

  const from = page * itemsPerPage
  const to = Math.min((page + 1) * itemsPerPage, items.length)

  React.useEffect(() => {
    setPage(0)
  }, [itemsPerPage])

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Nom</DataTable.Title>
        <DataTable.Title numeric>Score</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map(item => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.score}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  )
}

export default GridCustom
