import styled from "styled-components";

export const Uploaded = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;

    margin: 1.5rem 0rem 0rem 0rem;


    h2 {
        font-size: 1rem;
        color: #808080;
        font-weight: 400;
        margin-bottom: .5rem;
    }
`;

export const ListUpload = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Uploads = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 1rem;
`;

interface PropsImg {
    src: string;
};

export const Preview = styled.div<PropsImg>`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-image: url(${ props  => props.src });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Info = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    
    h3 {
        font-size: .8rem;
        font-weight: 600;
        color: #171717;
        padding-bottom: .5rem;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    padding-top: .5rem;

    span {
        font-size: .8rem;
        font-weight: 400;
        color: #808080;
    }

    button {
        border: none;
        cursor: pointer;
        background: transparent;

        font-size: .8rem;
        font-weight: 600;
        color: #EE404C;
        margin-left: 1rem;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;