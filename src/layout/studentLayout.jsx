import React from 'react';

const StudentLayout = (props) => {
    return (
        <div>
            <div className={props.class}>
                {props.children}
            </div>
        </div>
    );
};


export default StudentLayout;
