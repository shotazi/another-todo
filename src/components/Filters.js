import React from 'react';
import { connect } from 'react-redux';
import { filterAction } from '../actions/index';


const filters = ({filter}) => (
    <div id='filters'>
        <button onClick={() => filter('ALL')}>All</button>
        <button onClick={() => filter('ACTIVE')}>Active</button>
        <button onClick={() => filter('COMPLETED')}>Completed</button>
    </div>
);


const mapDispatchToProps = dispatch => ({
    filter: (filter) => dispatch(filterAction(filter))
});

export default connect(null,mapDispatchToProps)(filters);
