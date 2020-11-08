import styled from "styled-components";
import ImgBg from "../../images/featured3.jpg";

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    height:100vh;
    max-height: 500px;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    color:#fff;
    text-align:center;
    padding: 0 1rem;
    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`

export const FeatureButton = styled.button`
    background: #ffc500;
    padding: 0.6rem 3rem;
    color: #000;
    font-size: 1.4rem;
    border: none;
    transition: 0.2s ease-out;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #e31837;
        color: #fff;
        cursor: pointer;
    }
`