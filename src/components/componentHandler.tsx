import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { MediaType } from '../constants/mediaType';
import { UploadedMediaDefault } from '../constants/uploadedMediaDefaults';
import { IUploadedImageMeta } from '../constracts/uploadedImageMeta';
import { UploadedImage } from './deckItems/uploadedImage';
import { UploadedVideo } from './deckItems/uploadedVideo';
import { EditableText } from './deckItems/editableText';

interface IProps extends IUploadedImageMeta {
    isSelected: boolean;
    setSelectedFile: (uuid: string) => void;
}

export const ComponentHandler: React.FC<IProps> = (props: IProps) => {
    const { uuid,
        isSelected,
        clientX,
        clientY,
        media,
        zIndex } = props;

    const styleObj = {
        top: clientY,
        left: clientX,
        width: UploadedMediaDefault.width,
        zIndex: zIndex,
    };

    const onChildClick = (type: MediaType) => (e: any) => {
        e?.preventDefault?.();

        if (type === MediaType.text && isSelected && e.isContextMenuClick) {
            props?.setSelectedFile?.('');
            return;
        }

        // if (isSelected) props?.setSelectedFile?.('');
        // else props?.setSelectedFile?.(uuid);

        if (isSelected) return;
        props?.setSelectedFile?.(uuid);
    }

    let inner: ReactNode = (<div>Something went wrong</div>);
    if (media === MediaType.image) { inner = (<UploadedImage file={props.file} onChildClick={onChildClick(MediaType.image)} />); }
    if (media === MediaType.video) { inner = (<UploadedVideo file={props.file} onChildClick={onChildClick(MediaType.video)} />); }
    if (media === MediaType.text) { inner = (<EditableText file={props.file} isSelected={isSelected} onChildClick={onChildClick(MediaType.text)} />); }

    return (
        <div
            key={`uploadedImg-${uuid}`}
            className={classNames('uploaded-media', 'noselect', { 'selected': isSelected })}
            style={styleObj}
        >
            {inner}
            <div className="meta noselect">
                {
                    isSelected && <span className="abs-top-right noselect">z-index:&nbsp;{zIndex.toString()}</span>
                }
            </div>
        </div>
    );
};
