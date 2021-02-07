import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TableSkeleton = (props) => {
    return (
        <div className="">
            <Skeleton height={55} />
            <Skeleton height={50} />
            <Skeleton height={50} />
            <Skeleton height={50} />
        </div>
    );
};

export default TableSkeleton;
