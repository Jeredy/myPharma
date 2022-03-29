import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`;
export const Subcontainer = styled.div`
  display: ${({ showUserInfo }) => (showUserInfo || window.innerWidth > 600 ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 0rem 0.5rem;

  @media screen and (max-width: 600px) {
    position: ${({ showUserInfo }) => (showUserInfo ? "absolute" : "none")};
    bottom: -3.5rem;
    right: 0rem;
    width: 100%;
    padding: .5rem .8rem;
    min-width: 150px;
    background: #fff;
    border-radius: 2px;
    -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const Name = styled.p`
  color: #282828;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  font-size: clamp(0.6rem, 4vw, 0.9rem);
  margin-bottom: 0.2rem;
  text-transform: capitalize;
`;
export const Position = styled.p`
  color: #666;
  font-size: 0.7rem;
`;
export const Image = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
