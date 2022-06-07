import React from 'react'
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Sort, Search, Toolbar, Inject
} from '@syncfusion/ej2-react-grids'

import {
  employeesData, contextMenuItems,
  employeesGrid
} from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Empolyees' />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees