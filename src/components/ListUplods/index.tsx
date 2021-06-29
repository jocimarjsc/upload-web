import { Line as ProgressBar } from "rc-progress";

import {
  Uploaded,
  ListUpload,
  Uploads,
  Info,
  Footer,
  Icons,
  Preview,
} from "./styles";

import Lottie from "react-lottie";

import checked from "../../assets/checked.json";
import warning from "../../assets/warning.json";
import share from "../../assets/share.json";

function ListUplods({ files, onDelete }: any) {
  return (
    <Uploaded>
      <h2>Uploaded Images</h2>

      <ListUpload>
        {files.map((prop: any) => (
          <Uploads key={prop.id}>
            <Preview src={prop.preview} />
            <Info>
              <h3>{prop.name}</h3>
              <ProgressBar
                percent={prop.uploaded ? prop.progress : 95}
                strokeWidth={1.5}
                strokeColor={prop.uploaded ? "#44C4A1" : "#EE404C"}
              />
              <Footer className="footer">
                <span>{prop.readableSize}</span>
                <button onClick={() => onDelete(prop.id)}>Excluir</button>
              </Footer>
            </Info>

            <Icons>
              {prop.url && (
                <a href={prop.url ? prop.url : "#"} target="_blank" rel="noreferrer">
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData: share,
                    }}
                    width={30}
                    height={30}
                  />
                </a>
              )}

              {prop.uploaded && (
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: checked,
                  }}
                  width={40}
                  height={40}
                />
              )}

              {prop.error && (
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: warning,
                  }}
                  width={40}
                  height={40}
                />
              )}
            </Icons>
          </Uploads>
        ))}
      </ListUpload>
    </Uploaded>
  );
}

export { ListUplods };
