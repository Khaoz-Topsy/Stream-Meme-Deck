import React from 'react';

import { IUploadedImageMeta } from './constracts/uploadedImageMeta';
import { UploadedImage } from './components/uploadedImage';

import { DragAndDropContainer } from './dragAndDropContainer';

const mouseTrap = require('react-mousetrap');

interface IProps {
  bindShortcut: any;
  unbindShortcut: any;
}
interface IState {
  files: Array<IUploadedImageMeta>
  selectedFileUuid: string;
}

class AppUnTrapped extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      files: [],
      selectedFileUuid: '',
    }
  }

  componentWillMount() {
    this.props.bindShortcut('esc', this._deselect);
    this.props.bindShortcut('del', this._deleteFile);
  }

  componentWillUnmount() {
    this.props.unbindShortcut('esc', this._deselect);
    this.props.unbindShortcut('del', this._deleteFile);
  }

  _deselect = () => this.setSelectedFile('');
  _deleteFile = () => {
    if (this.state.selectedFileUuid == null || this.state.selectedFileUuid.length < 10) return;
    this.setState((prevState: IState) => {
      return {
        files: [...prevState.files.filter(f => f.uuid !== prevState.selectedFileUuid)],
        selectedFileUuid: '',
      }
    })
  }

  addFile = (file: IUploadedImageMeta) => {
    this.setState((prevState: IState) => {
      return {
        files: [...prevState.files, file],
      }
    })
  }

  setSelectedFile = (uuid: string) => {
    this.setState({ selectedFileUuid: uuid });
  }

  render() {
    return (
      <div className="deck-inner">
        <DragAndDropContainer addFile={this.addFile} onClick={() => this.setState({ selectedFileUuid: '' })} />
        {
          this.state.files.map((fileMeta: IUploadedImageMeta) => {
            return (
              <UploadedImage
                key={fileMeta.uuid}
                {...fileMeta}
                selectedFile={this.state.selectedFileUuid}
                setSelectedFile={this.setSelectedFile}
              />
            )
          })
        }
      </div >
    );
  }
}

export const App = mouseTrap.mouseTrap(AppUnTrapped);
