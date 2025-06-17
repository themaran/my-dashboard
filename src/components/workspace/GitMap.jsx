import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitMap = () => {
  return (
    <div>
        <GitHubCalendar username="themaran" 
 labels={{
    months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    totalCount: '{{count}} Aktivitäten in {{year}}',
    legend: {
      less: 'Weniger',
      more: 'Mehr',
    },
  }} colorScheme={'light'} hideColorLegend hideTotalCount year={2025} blockSize={5} fontSize={10} blockRadius={2}/>
    </div>
  )
}

export default GitMap