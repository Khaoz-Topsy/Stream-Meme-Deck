import React from 'react';

interface IProps {
    file: File;
    onChildClick: (e: any) => void;
}

export const UploadedVideo: React.FC<IProps> = (props: IProps) => {
    return (
        <video autoPlay loop muted
            onContextMenu={props.onChildClick}
            onClick={props.onChildClick}
        >
            <source src={URL.createObjectURL(props.file)}
                type="video/mp4"
                draggable={false}>
            </source>
        </video>
    );
};
