import React from 'react';
import Select from 'react-select';

const options = [
    { value: '1', label: '1 Person' },
    { value: '2', label: '2 People' },
    { value: '3', label: '3 People' },
    { value: '4', label: '4 People' },
    { value: '5', label: '5 People' },
    { value: '6', label: '6 People' },
    { value: '7', label: '7 People' },
    { value: '8', label: '8 People' },
    { value: '9', label: '9 People' },
    { value: '10', label: '10 People' },
    { value: '11', label: '11 People' },
    { value: '12', label: '12 People' },
    { value: '13', label: '13 People' },
    { value: '14', label: '14 People' },
    { value: '15', label: '15 People' },
    { value: '16', label: '16 People' },
    { value: '17', label: '17 People' },
    { value: '18', label: '18 People' },
    { value: '19', label: '19 People' },
    { value: '20', label: '20 People' }
]

function DropDown({ people, setPeople }) {
    return (
        <>
            <Select id='dropdown'
                value={people}
                onChange={setPeople}
                options={options} >
            </Select>
        </>
    )
}

export default DropDown
