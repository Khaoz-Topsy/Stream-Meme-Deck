import React from 'react';

import { IUploadedImageMeta } from './constracts/uploadedImageMeta';
import { DeckItems } from './components/deckItems';

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

    this.props.bindShortcut('up', this._incZIndex);
    this.props.bindShortcut('down', this._decZIndex);
  }

  componentWillUnmount() {
    this.props.unbindShortcut('esc', this._deselect);
    this.props.unbindShortcut('del', this._deleteFile);

    this.props.unbindShortcut('up', this._incZIndex);
    this.props.unbindShortcut('down', this._decZIndex);
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
  _incZIndex = () => this._alterZIndex(1);
  _decZIndex = () => this._alterZIndex(-1);
  _alterZIndex = (modifer: number) => {
    if (this.state.selectedFileUuid == null || this.state.selectedFileUuid.length < 10) return;
    this.setState((prevState: IState) => {
      const index = prevState.files.findIndex(f => f.uuid === prevState.selectedFileUuid);
      if (index == null) return null;

      let newIndex = prevState.files[index].zIndex + modifer;
      if (newIndex <= 0) newIndex = 1;

      const alteredItem = { ...prevState.files[index], zIndex: newIndex };
      const newFiles = [
        ...prevState.files.slice(0, index),
        alteredItem,
        ...prevState.files.slice(index + 1)
      ]
      return {
        files: newFiles,
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
    const { files, selectedFileUuid } = this.state;
    return (
      <>
        <DragAndDropContainer addFile={this.addFile} onClick={() => this.setState({ selectedFileUuid: '' })} />
        <DeckItems files={files} selectedFileUuid={selectedFileUuid} setSelectedFile={this.setSelectedFile} />
      </>
    );
  }
}

export const App = mouseTrap.mouseTrap(AppUnTrapped);
