import { uniqueId } from "lodash";
import filesize from "filesize";

import { GlobalStyled } from './styles/Global';
import { Container, Content } from "./styles/app";
import { Upload } from "./components/Upload";
import { ListUplods } from "./components/ListUplods";
import { useState } from "react";
import { api } from "./services/api";
import { useEffect } from "react";

interface filesUploads {
  uniqueFile: File[];
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
  const [files, setFiles] = useState<filesUploads[]>([]);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] =useState(null);


  function HandleUpload( file: any) {
    const data = file.map((upload: File) => ({
      uniqueFile: upload,
      id: uniqueId().toString(),
      name: upload.name,
      readableSize: filesize(upload.size),
      preview: URL.createObjectURL(upload),
      progress,
      uploaded,
      error,
      url,
    }))
    setFiles(data)

  };

  files.forEach((upload: any) => {
    const data = new FormData();

    data.append("file", upload.uniqueFile);

    api.post("/uploads", data, {
      onUploadProgress: e => {
        const progress = Math.round((parseInt(e.loaded) * 100) / parseInt(e.total));
        setProgress(progress)
      }
    }).then((file: any) => {
      setUploaded(true);
      setUrl(file.url)
    }).catch(() => {
      setError(true)
    })
  })

  function processUpload () {
    
  }
  return (
    <>
    <Container>
      <Content>
        <Upload
          onUpload={HandleUpload}
        />
        {!! files.length && (
          <ListUplods files={files} onDelete={() => {}} />
        )}
        
      </Content>
      <GlobalStyled />
    </Container>
    
      
    </>
  );
}

export default App;
