import {DatePicker} from '@material-ui/pickers';
import setDeadline from '../firebase/setTaskDeadline';
import React, {useState} from 'react';
import { useEffect } from 'react';

const DeadlinePicker = ({uid, taskId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());
    useEffect(() => {
        setDeadline(uid, taskId, selectedDate);
    }, [selectedDate, taskId]);
    return (
        <>
        <button className="btn-icon" onClick={() => setIsOpen(true)}></button>
        <DatePicker 
            variant="inline"
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            label="Deadline"
            value={selectedDate}
            onChange={handleDateChange}
        />
        </>
    )
};

export default DeadlinePicker;
