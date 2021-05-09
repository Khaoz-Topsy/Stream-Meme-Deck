import React from 'react';
import { EditTextarea } from 'react-edit-text';

interface IProps {
    onChildClick: (e: any) => void;
}

export const EditableText: React.FC<IProps> = (props: IProps) => {
    return (
        <div onContextMenu={props.onChildClick}>
            <EditTextarea defaultValue="Default Text" />
        </div>
    );
};
