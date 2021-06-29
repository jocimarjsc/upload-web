import DropZone from "react-dropzone";

import { Header, DragDrop, Message, Section } from "./styles";

import imageIcon from "../../assets/image-icon.svg";

interface onUpload {
  onUpload: (file: any) => void;
}

function Upload({ onUpload }: onUpload) {
  function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
    if (!isDragActive) {
      return (
        <Message type="default">
          <p>Drag {"\u0026"} Drop your Images here.</p>
        </Message>
      );
    }

    if (isDragReject) {
      return (
        <Message type="error">
          <p>I don't support image format.</p>
        </Message>
      );
    }

    return (
      <Message type="success">
        <p>Drop as images here.</p>
      </Message>
    );
  }

  return (
    <Section>
      <Header>
        <h1>Upload Images</h1>
        <span>Images should be jpg, jpeg, png e gif</span>
      </Header>

      <DropZone accept="image/*" onDropAccepted={onUpload} >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DragDrop
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            <img src={imageIcon} alt="icon" />
            {renderDragMessage(isDragActive, isDragReject)}
          </DragDrop>
        )}
      </DropZone>
    </Section>
  );
}

export { Upload };
