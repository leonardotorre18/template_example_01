import React from 'react';
import ItemList from './ItemList';

export default function List({ list }) {
  return (
    <div className="max-w-7xl mx-auto py-10">
      { list.map(item => <ItemList {...item} key={item.id} />) }
    </div>
  )
}

List.defaultProps = {
  list: [],
}
