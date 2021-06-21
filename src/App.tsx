import { uniqueId } from "lodash";
import filesize from "filesize";

import { GlobalStyled } from './styles/Global';
import { Container, Content } from "./styles/app";
import { Upload } from "./components/Upload";
import { ListUplods } from "./components/ListUplods";
import { useState } from "react";
import { api } from "./services/api";

interface uploadImage {
  name: string;
  path: string;
  size: number;
  type: string;
}

interface filesUploads {
  file: uploadImage;
    id: string;
    name: string;
    readableSize: string;
    preview: string;
    progress: number;
    uploaded: boolean;
    error: boolean;
    url?: string
}

function App() {
  const [uploadsFiles, setUploadsFiles] = useState<filesUploads[]>([]);

  function HandleUpload( file: any) {
    const uploadFile = file.map( (file: uploadImage) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 99,
      uploaded: false,
      error: false,
      url: null
    }));
    
    setUploadsFiles(uploadsFiles.concat(uploadFile));
    
    uploadsFiles.forEach(processUpload);
    
  };

  function processUpload(uploadFile: any) {
    const data = new FormData();
    
    data.append("file", uploadFile.file, uploadFile.name);

    api.post("/uploads", data, {
      onUploadProgress: e => {
        const loaded = parseInt(e.loaded);
        const total = parseInt(e.total);
        const progress = Math.round((loaded * 100) / total);
        
        updateFile(uploadFile.id, {
          progress
        });
      }
    })
  }

  function updateFile(id:string, data: any) {
    uploadsFiles.map((uploadedFile: any) => {
      return id === uploadedFile.id
        ? { ...uploadedFile, ...data}
        : uploadedFile;
    })
  };

  return (
    <>
    <Container>
      <Content>
        <Upload
          onUpload={HandleUpload}
        />
        {!! uploadsFiles.length && (
          <ListUplods files={uploadsFiles} />
        )}
        
      </Content>
      <GlobalStyled />
    </Container>
    
      
    </>
  );
}

export default App;
