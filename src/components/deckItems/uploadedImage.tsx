import React from 'react';

interface IProps {
    file: File;
    onChildClick: (e: any) => void;
}

export const UploadedImage: React.FC<IProps> = (props: IProps) => {
    return (
        <img
            src={URL.createObjectURL(props.file)}
            onContextMenu={props.onChildClick}
            onClick={props.onChildClick}
            draggable={false}
            alt={props.file.name}
        />
    );
};
