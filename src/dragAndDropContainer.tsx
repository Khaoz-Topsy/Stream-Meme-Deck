import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MediaType } from './constants/mediaType';
import { UploadedMediaDefault } from './constants/uploadedMediaDefaults';
import { KnownExtensions } from './constants/knownExtensions';
import { IUploadedImageMeta } from './constracts/uploadedImageMeta';
import { getExtension } from './helper/extensionHelper';
import classNames from 'classnames';

interface IProps {
    onClick: () => void;
    addFile: (file: IUploadedImageMeta) => void;
}

export const DragAndDropContainer: React.FC<IProps> = (props: IProps) => {
    const [isOver, setOver] = useState(false);

    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e: any) => {
        e.preventDefault();
        if (e.dataTransfer.items) {
            handleDatatranferItems(e.dataTransfer.items, e.clientX, e.clientY);
        }
        setOver(false);
        e.stopPropagation();
    };

    const handlePaste = (e: any) => {
        e.preventDefault();

        const isFile = e.clipboardData &&
            e.clipboardData.files &&
            e.clipboardData.files.length

        const isText = e.clipboardData.types &&
            e.clipboardData.types.includes('text/plain');

        const isValid = isFile || isText;
        if (!isValid) { return; }

        if (isFile && e.clipboardData.files) {
            handleDatatranferItems(e.clipboardData.files, 250, 250);
        }

        if (isText && e.clipboardData) {
            const text = e.clipboardData?.getData?.('text/plain');
            addText(text);
        }

        e.stopPropagation();
    };

    const handleDoubleClick = () => addText();

    const addText = (text?: string) => {
        props.addFile({
            file: ({ text } as any),
            media: MediaType.text,
            uuid: uuidv4(),
            clientX: 250,
            clientY: 250,
            zIndex: UploadedMediaDefault.zIndex,
        });
    };

    const handleDatatranferItems = (dataTransferItems: any[], clientX: number, clientY: number) => {
        for (let i = 0; i < dataTransferItems.length; i++) {
            const dataTransferItem = dataTransferItems[i];

            let file = dataTransferItem;
            if (dataTransferItem.kind === 'file') {
                file = dataTransferItem.getAsFile();
            }

            const fileExt = getExtension(file.name);
            let isVideo = false;
            if (fileExt != null) isVideo = KnownExtensions.video.includes(fileExt);

            props.addFile({
                file,
                media: isVideo ? MediaType.video : MediaType.image,
                uuid: uuidv4(),
                clientX,
                clientY,
                zIndex: UploadedMediaDefault.zIndex,
            });
        }
    };

    return (
        <div className={classNames('drag-drop-zone', { 'drag-is-over': isOver })}
            onDragEnter={() => setOver(true)}
            onDragOver={handleDragOver}
            onDragLeave={() => setOver(false)}
            onDrop={handleDrop}
            onPaste={handlePaste}
            onDoubleClick={handleDoubleClick}
            onClick={props.onClick}
        >
        </div>
    );
};
