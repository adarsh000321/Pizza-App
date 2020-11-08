import styled from "styled-components";

export const ProductContainer = styled.div`
    /* width: 100vw; */
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    background: #150f0f;
    color: #fff;
`

export const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2rem;
    width: 300px;
`

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
` 
export const ProductHeading = styled.div`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align:center;
    margin-bottom: 5rem; 
` 
export const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1.5rem;
` 
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    padding: 2rem;
`  

export const ProductDesc = styled.div`
    margin-bottom: 1rem;
`

export const ProductPrice = styled.div`
    margin-bottom: 1rem;
    font-size: 2rem;
`
export const ProductButton = styled.div`
    font-size: 1rem;
    padding: 1rem 4rem;
    border:none;
    background:#e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        cursor: pointer;
        transition: 0.2s ease-out;
        color: #000;
        background: #ffc500;
    }
`