import React from 'react';
import Moveable from "react-moveable";
import { MediaType } from '../constants/mediaType';

import { IUploadedImageMeta } from '../constracts/uploadedImageMeta';
import { ComponentHandler } from './componentHandler';

interface IProps {
    files: Array<IUploadedImageMeta>
    selectedFileUuid: string;
    setSelectedFile: (uuid: string) => void;
}

export const DeckItems: React.FC<IProps> = (props: IProps) => {

    let selectedFile: IUploadedImageMeta | null = null;
    for (const file of props.files) {
        if (file.uuid === props.selectedFileUuid) {
            selectedFile = { ...file };
        }
    }

    return (
        <div key="container" className="deck-items">
            {
                props.files.map((fileMeta: IUploadedImageMeta) => {
                    return (
                        <ComponentHandler
                            key={fileMeta.uuid}
                            {...fileMeta}
                            isSelected={fileMeta.uuid === props.selectedFileUuid}
                            setSelectedFile={props.setSelectedFile}
                        />
                    )
                })
            }
            {
                (selectedFile != null) &&
                <Moveable
                    key={`movable-${selectedFile.uuid}`}
                    target=".selected"
                    className="noselect"
                    individualGroupable={true}
                    container={null}
                    origin={false}
                    edge={false}
                    draggable={true}
                    throttleDrag={0}
                    onDrag={({ target, transform }: any) => {
                        target!.style.transform = transform;
                    }}

                    keepRatio={selectedFile.media !== MediaType.text}

                    resizable={true}
                    throttleResize={0}
                    onResize={({ target, width, height, delta }: any) => {
                        delta[0] && (target!.style.width = `${width}px`);
                        delta[1] && (target!.style.height = `${height}px`);
                    }}

                    rotatable={true}
                    throttleRotate={0}
                    onRotate={({ target, transform }: any) => {
                        target!.style.transform = transform;
                    }}
                >
                </Moveable>
            }
        </div>
    );
};
