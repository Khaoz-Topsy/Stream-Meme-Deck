import React from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import { Resizable, Enable } from "re-resizable";

import { IUploadedImageMeta } from '../constracts/uploadedImageMeta';

interface IProps extends IUploadedImageMeta {
    selectedFile: string;
    setSelectedFile: (uuid: string) => void;
}

export const UploadedImage: React.FC<IProps> = (props: IProps) => {
    const isSelected = props.uuid === props.selectedFile;

    const enabledProps: Enable = {
        top: isSelected,
        right: isSelected,
        bottom: isSelected,
        left: isSelected,
        topRight: isSelected,
        bottomRight: isSelected,
        bottomLeft: isSelected,
        topLeft: isSelected,
    }
    const defaultPosition = {
        x: props.clientX,
        y: props.clientY,
    };
    const defaultSize = {
        width: 200,
        height: 200
    };

    const onImageClick = (e: any) => {
        e.preventDefault();
        if (isSelected) props?.setSelectedFile?.('');
        else props?.setSelectedFile?.(props.uuid);
    }

    return (
        <Draggable
            handle=".uploaded-img"
            disabled={isSelected}
            defaultPosition={defaultPosition}
            scale={1}
        // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}
        >
            <Resizable
                key={`uploadedImg-${props.uuid}`}
                defaultSize={defaultSize}
                enable={enabledProps}
                className={classNames('uploaded-img', { 'selected': isSelected })}
            >
                <img
                    src={URL.createObjectURL(props.file)}
                    onContextMenu={onImageClick}
                    draggable={false}
                    alt={props.file.name}
                />
            </Resizable>
        </Draggable>
    );
};
