import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IUploadedImageMeta } from './constracts/uploadedImageMeta';

interface IProps {
    onClick: () => void;
    addFile: (file: IUploadedImageMeta) => void;
}

export const DragAndDropContainer: React.FC<IProps> = (props: IProps) => {
    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e: any) => {
        e.preventDefault();
        if (e.dataTransfer.items) {
            handleDatatranferItems(e.dataTransfer.items, e.clientX, e.clientY);
        }
        e.stopPropagation();
    };

    const handlePaste = (e: any) => {
        e.preventDefault();

        const isValid = e.clipboardData &&
            e.clipboardData.files &&
            e.clipboardData.files.length;

        if (!isValid) { return; }

        if (e.clipboardData.files) {
            handleDatatranferItems(e.clipboardData.files, 250, 250);
        }

        e.stopPropagation();
    };

    const handleDatatranferItems = (dataTransferItems: any[], clientX: number, clientY: number) => {
        for (let i = 0; i < dataTransferItems.length; i++) {
            const dataTransferItem = dataTransferItems[i];

            let file = dataTransferItem;
            if (dataTransferItem.kind === 'file') {
                file = dataTransferItem.getAsFile();
            }

            props.addFile({
                file,
                uuid: uuidv4(),
                clientX,
                clientY,
            });
        }
    };
    return (
        <div className={'drag-drop-zone'}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onPaste={handlePaste}
            onClick={props.onClick}
        >
        </div>
    );
};
