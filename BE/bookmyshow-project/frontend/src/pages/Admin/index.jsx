import React from 'react'
import MovieList from './MovieList'
import TheatresTable from './TheatresTable'
import { Tabs } from 'antd'

function index() {
    const tabitems =  [
        {
            key:"1",
            label: 'Movies',
            children: <MovieList></MovieList>
        },
        {
            key:"2",
            label: 'Theatres',
            children: <TheatresTable></TheatresTable>
        }
    ]
  return (
    <div>
        <h1>Admin Page</h1>
        <Tabs items={tabitems}></Tabs>
    </div>
  )
}

export default index