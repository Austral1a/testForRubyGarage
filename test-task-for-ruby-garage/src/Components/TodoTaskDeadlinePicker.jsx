import {DatePicker} from '@material-ui/pickers';
import setDeadline from '../firebase/setTaskDeadline';
import {connect} from 'react-redux';
import React, {useState, useCallback, useEffect} from 'react';
import getDeadlines from '../store/actions/getTasksDeadlines';

const mapStateToProps = (state) => ({
    deadlines: state.getTasksDeadlinesReducer.map,
});

const mapDispatchToProps = (dispatch) => ({
    getDeadlines: (uid) => {
        dispatch(getDeadlines(uid));
    },
})

const DeadlinePicker = ({uid, taskId, deadlines, getDeadlines}) => {
    const [isOpen, setIsOpen] = useState(false);
    const memoGetDeadlines = useCallback(
        () => {
            getDeadlines(uid);
        },
        [uid]
    );

    useEffect(() => {
        memoGetDeadlines();
    }, [memoGetDeadlines, deadlines[taskId]]);
    return (
        <>
        <button className="btn-icon" onClick={() => setIsOpen(true)}></button>
        <DatePicker 
            variant="inline"
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            label="Deadline"
            value={deadlines[taskId]}
            onChange={(e) => setDeadline(uid, taskId, e.toISOString())}
        />
        </>
    )
};

const ConnectedDeadlinePicker = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeadlinePicker);

export default ConnectedDeadlinePicker;
