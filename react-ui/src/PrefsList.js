import React, { Component } from 'react';
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';
// import { connect } from 'react-redux';

import PrefItem from './PrefItem';
// import { removePref } from '../actions';

const DragHandle = SortableHandle(() => <span tabIndex = "0" className="drag-handle">&#9776; </span>);

const SortablePreference = SortableElement(({value, id}) =>
  <li className="list-item"
    draggable="true"
    aria-grabbed="false"
    key={id} ><DragHandle />
    <PrefItem value={value} />
  </li>
)

const PrefsList = SortableContainer (({items}) => {
    return(
      <ul className="sortable-list">
        {items.map((value, index) => (
          <SortablePreference
            key={`item-${value}`}
            index={index}
            value={value}
          />
        ))}
      </ul>
    )
  }
);
//
// function mapStateToProps(state) {
//   return {
//     items: state.prefsList
//   }
// }


export default PrefsList;
// export default connect(mapStateToProps, { removePref })(PrefsList);
