import classNames from 'classnames';
import { Enable, Resizable } from 're-resizable';
import React, { ReactNode } from 'react';
import Draggable from 'react-draggable';
import { MediaType } from '../constants/mediaType';

import { IUploadedImageMeta } from '../constracts/uploadedImageMeta';
import { UploadedImage } from './uploadedImage';
import { UploadedVideo } from './uploadedVideo';
import { EditableText } from './editableText';

interface IProps extends IUploadedImageMeta {
    selectedFile: string;
    setSelectedFile: (uuid: string) => void;
}

export const ComponentHandler: React.FC<IProps> = (props: IProps) => {
    const isSelected = props.uuid === props.selectedFile;
    const { uuid,
        clientX,
        clientY,
        media } = props;

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
        x: clientX,
        y: clientY,
    };
    const defaultSize = {
        width: 200,
        height: 200
    };

    const onChildClick = (e: any) => {
        e.preventDefault();
        if (isSelected) props?.setSelectedFile?.('');
        else props?.setSelectedFile?.(uuid);
    }

    let inner: ReactNode = (<div>Something went wrong</div>);
    if (media === MediaType.image) { inner = (<UploadedImage file={props.file} onChildClick={onChildClick} />); }
    if (media === MediaType.video) { inner = (<UploadedVideo file={props.file} onChildClick={onChildClick} />); }
    if (media === MediaType.text) { inner = (<EditableText onChildClick={onChildClick} />); }

    return (
        <Draggable
            handle=".uploaded-media"
            disabled={isSelected}
            defaultPosition={defaultPosition}
            scale={1}
        // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}
        >
            <Resizable
                key={`uploadedImg-${uuid}`}
                defaultSize={defaultSize}
                enable={enabledProps}
                className={classNames('uploaded-media', { 'selected': isSelected })}
            >
                {inner}
            </Resizable>
        </Draggable>
    );
};
