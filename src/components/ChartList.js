import React from 'react';

const ChartList = (props) => {
  const chartEntries = props.top20.map((entry, index) => {
    return(
      <div key={index}>
      <h3>{entry['im:artist'].label} - {entry['im:name'].label}</h3>
      <ul>
        <li>Price: {entry['im:price'].label}</li>
        <li>Genre: {entry.category.attributes.label}</li>
        <li><a href={entry.link[0].attributes.href}>Buy on iTunes</a></li>
      </ul>
      <img src={entry['im:image'][2].label} alt={entry.title} />
      <p>
        <audio controls>
          <source src={entry.link[1].attributes.href} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </p>
      </div>

    )
  })
  return (
    <div>
    {chartEntries}
    </div>
  )
}

export default ChartList;
