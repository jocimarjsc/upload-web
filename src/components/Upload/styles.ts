import styled, { css } from 'styled-components';

interface PropsDrag {
    readonly isDragActive: boolean;
    readonly isDragReject: boolean;
};

export const Section = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Header = styled.header`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
        color: #171717;
        font-weight: 400;
        font-size: 2.5rem;
    }

    span {
        color: #808080;
        font-weight: 400;
        font-size: .8rem;
        margin-top: .5rem;
    }
`;

const dragActive = css`
    border-color: #44C4A1;
`;

const dragReject = css`
    border-color: #EE404C;
`;

export const DragDrop = styled.div<PropsDrag>`
    width: 90%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 2rem 0;
    border-radius: 20px;
    background: #E2F1FF;
    border: 2px dashed #4F95FF;

    cursor: pointer;

    transition: height 0.2s ease;

    ${({ isDragActive }) => isDragActive && dragActive};
    ${({ isDragReject }) => isDragReject && dragReject};

    img {
        width: 40px;
    }
`;

interface PropsSpan {
    readonly type: string;
};

const isSuccess = css`
    color: #44C4A1;
`;

const isError = css`
    color: #EE404C;
`;

const isDefault = css`
    color: #808080;
`;

export const Message = styled.div<PropsSpan>`
    margin-top: 1rem;   
    p {
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        ${({ type }) => type === "error" ? isError : type === "success" ? isSuccess : isDefault }
    }

   
`;