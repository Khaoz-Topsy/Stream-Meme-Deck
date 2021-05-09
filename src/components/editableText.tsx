import React from 'react';
import { EditText } from 'react-edit-text';

import 'react-edit-text/dist/index.css';

interface IProps {
    onChildClick: (e: any) => void;
}

export const EditableText: React.FC<IProps> = (props: IProps) => {
    return (
        <div onContextMenu={props.onChildClick}>
            <EditText defaultValue="Default Text" />
        </div>
    );
};
