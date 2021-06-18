import { Section, Container, Header, DragDrop, Message } from "./styles";
import DropZone from "react-dropzone";

import imageIcon from "../../assets/image-icon.svg";

function Upload() {
  function renderDragMessage(isDragActive: boolean, isDragReject: boolean) {
    if(!isDragActive) {
      return <Message><span>Drag {"\u0026"} Drop your Images here</span></Message>
    }

    if(isDragReject) {
      return <Message type="error"><span>I don't support image format</span></Message>
    }

    return <Message type="success"><span>drop as images here</span></Message>
  }
  
  return (
    <Container>
      <Section>
        <Header>
          <h1>Upload Images</h1>
          <span>Images should be jpg, jpeg, png e gif</span>
        </Header>

        <DropZone accept="image/*" onDropAccepted={() => {}}>
          { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DragDrop {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              <img src={imageIcon} alt="icon" />
              {renderDragMessage(isDragActive, isDragReject)}
            </DragDrop>
            )
          }
        </DropZone>

        {/* início do progresso dos uploads */}
        <div className="uploaded">
          <h2>Uploaded Images</h2>

          <div className="list-uploads">
            <div className="uploads">
              <img src="https://github.com/jocimarjsc.png" alt="jocimar" />
              <div className="info">
                <h3>profile.png</h3>
                <div className="progress"></div>
                <div className="footer">
                  <span>450 kb</span>
                  <button>Excluir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

export { Upload };
