import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Section = styled.div`
    width: 35%;
    background: #f5f5f5;

    border-radius: 20px;
    box-shadow: 0px 4px 65px rgba(3, 2, 26, 0.25);
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0rem;

    h1 {
        color: #171717;
        font-weight: 400;
        font-size: 2.5rem;
    }

    span {
        margin-top: .5rem;
        color: #808080;
        font-weight: 400;
        font-size: .8rem;
    }
`;

interface Props {
    readonly isDragActive: boolean;
    readonly isDragReject: boolean;
    readonly type: string;
};

const dragActive = css`
    border-color: #44C4A1;
`;

const dragReject = css`
    border-color: #EE404C;
`;

export const DragDrop = styled.div<Props>`
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 5rem;
    margin: auto;
    border-radius: 20px;
    background: #E2F1FF;
    margin-bottom: 3rem;
    border: 1px dashed #4F95FF;

    cursor: pointer;

    transition: height 0.2s ease;

    ${({ isDragActive }) => isDragActive && dragActive};
    ${({ isDragReject }) => isDragReject && dragReject};

    span {
        margin-top: .8rem;
        color: #808080;
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const Message = styled.span<Props>`
`;