import React from 'react'
import {
  ChartComponent, SeriesCollectionDirective,
  SeriesDirective, Inject, DataLabel, Legend,
  ColumnSeries, Tooltip, Category
} from '@syncfusion/ej2-react-charts'

import { ChartsHeader } from '../../components'

import {
  barCustomSeries, barPrimaryXAxis,
  barPrimaryYAxis
} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white 
    dark:bg-secondary-dark-bg rounded-3xl'
    >
      <ChartsHeader category='Bar' title='Olympic Medal Counts - RIO' />
      <ChartComponent
        id='charts'
        height='428px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[Category, Tooltip, ColumnSeries,
          DataLabel,
          Legend]
        }
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) =>
            <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar