import React, { useEffect, useState } from "react";

import 'tailwindcss/colors';

const Filter = ({ filterCards, tags }) => {
  const [activeTags, setActiveTags] = useState([]);

  useEffect(() => {
    filterCards(activeTags);
  }, [activeTags, filterCards]);

  const colors = [
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink'
  ];

  function addRemoveTag(active, t) {
    let newTags = active
      ? activeTags.filter(a => a !== t)
      : activeTags.concat(t);
    setActiveTags(newTags);
  }

  return (
    <div className="container text-center">
      <h3 className="text-lg lg:text-xl font-bold text-blue-600 tracking-tight pb-2">
        Select a tag to filter the articles below
      </h3>
      {(tags || []).map((t, i) => {
        const colorIndex = i > (colors.length - 1) ? i % (colors.length - 1) : i;
        const color = colors[colorIndex];
        const active = activeTags.indexOf(t.tag) !== -1;
        return (
          <button
            key={t.ID}
            onClick={() => addRemoveTag(active, t.tag)}
            className={`
              border border-${color}-500 bg-${active ? `${color}-500` : 'white'}
              text-${active ? 'white' : `${color}-500`} rounded-md px-4 py-2 m-2 transition duration-100
              ease select-none hover:bg-${color}-600 hover:text-white focus:outline-none focus:shadow-outline
            `}>
              {t.tag}
          </button>
        );
      })}
      {activeTags.length > 0 && (
        <button
          onClick={() => setActiveTags([])}
          className={`
            border border-gray-600 bg-white
            text-gray-600 rounded-md px-4 py-2 m-2 transition duration-100
            ease select-none hover:bg-gray-600 hover:text-white focus:outline-none focus:shadow-outline
          `}>
          Clear Tags
        </button>
      )}
    </div>
  )
}

export default Filter
