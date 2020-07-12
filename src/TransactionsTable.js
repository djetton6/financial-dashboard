import React from 'react';
import {DetailsList} from '@fluentui/react';
import {mergeStyleSets} from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const operations = [
    {
        from: '0000 1244 5060 2010 6604',
        to: '0203 4040 2039 50694 3020',
        amount: '$1 452',
        date: '20-05-2020',
    },
    {
        from: '0000 1244 5060 2010 6604',
        to: '0203 4040 2039 50694 3020',
        amount: '$1 452',
        date: '20-05-2020',
    },
    {
        from: '0000 1244 5060 2010 6604',
        to: '0203 4040 2039 50694 3020',
        amount: '$1 452',
        date: '20-05-2020',
    },
    {
        from: '0000 1244 5060 2010 6604',
        to: '0203 4040 2039 50694 3020',
        amount: '$1 452',
        date: '20-05-2020',
    },
    {
        from: '0000 1244 5060 2010 6604',
        to: '0203 4040 2039 50694 3020',
        amount: '$1 452',
        date: '20-05-2020',
    },
]

const columns = [
    {key: 'column1', name: "From", fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column2', name: "To", fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column3', name: "Amount", fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true},
    {key: 'column4', name: "From", fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true},
]

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',
    }

});;

const TransactionsTable = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
            <DetailsList items={operations}
            columns = {columns}
            selectionMode={0}
            />
            </div>
        </div>
    )
}

export default TransactionsTable;
