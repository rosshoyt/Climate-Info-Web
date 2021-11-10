import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import scatter from '../../Data/nivo-default-data/scatter'
import useStore from '../../store';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const ScatterPlotChart = ({ data=scatter/* see data tab */ }) => {
    const yearInfo = useStore(state => state.years);

    function getColor(year) {
        return yearInfo.find(y => y.year === year).color;
    }

    return (
        <ResponsiveScatterPlot
            data={data}
            //colors={{ datum: 'data.color' }}
            colors={(node) => {
                return getColor(node.serieId);
            }}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: 'point', min: 0, max: 'auto' }}
            xFormat=" >-.2f"
            yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
            yFormat=">-.2f"
            blendMode="multiply"
            nodeSize={8}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Date',
                legendPosition: 'middle',
                legendOffset: 46
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Temperature (F)',
                legendPosition: 'middle',
                legendOffset: -60
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 130,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 12,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
}
export default ScatterPlotChart;