import {DatePicker} from '@material-ui/pickers';
import React, {useState} from 'react';

const DeadlinePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState("2018-01-01T00:00:00.000Z");
    return (
        <>
        <button className="btn-icon" onClick={() => setIsOpen(true)}></button>
        <DatePicker 
            variant="inline"
            open={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            value={selectedDate}
            onChange={handleDateChange}
        />
        </>
    )
};

export default DeadlinePicker;
