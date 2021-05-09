import { MediaType } from '../constants/mediaType'

export interface IUploadedImageMeta {
    uuid: string;
    media: MediaType;
    file: File;
    clientX: number;
    clientY: number;
}