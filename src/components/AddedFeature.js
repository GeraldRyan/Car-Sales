import React from 'react';
import {removeItem} from './actions/actions'
import {connect} from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.removeItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state =>
{
  return {}
}

export default connect(mapStateToProps,{removeItem})(AddedFeature);
