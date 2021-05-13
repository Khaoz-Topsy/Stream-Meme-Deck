import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { SimpleModal } from '../modal';

interface IProps {
    file: File;
    isSelected: boolean;
    onChildClick: (e: any) => void;
}

export const EditableText: React.FC<IProps> = (props: IProps) => {
    const passedDownText = (props.file as any)?.text;
    const [value, setValue] = useState(passedDownText ?? 'Something funny');

    const modulesQuill = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'font': [] }],
                ['bold', 'italic', 'underline'],
                [
                    { 'list': 'ordered' }, { 'list': 'bullet' },
                    { 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] },
                ],
            ],
        },
    };

    const formatsQuill = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline',
        'list', 'bullet', 'color',
    ];

    const contextMenuWrapper = (callback: () => void) => (e: any) => {
        e.preventDefault();
        if (props.isSelected) props?.onChildClick?.({ ...e, isContextMenuClick: true });
        callback();
    }

    return (
        <SimpleModal
            title="Edit Text"
            className="text-modal"
            showSaveButton={true}
            openModalRenderer={(openFunc) => (
                <div className="text" onClick={props.onChildClick} onContextMenu={contextMenuWrapper(openFunc)}>
                    <div dangerouslySetInnerHTML={{ __html: value }}></div>
                </div>
            )}>
            <ReactQuill theme="snow"
                value={value}
                onChange={setValue}
                modules={modulesQuill}
                formats={formatsQuill}
            />
        </SimpleModal>
    );
};