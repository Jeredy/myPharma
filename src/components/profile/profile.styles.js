import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 0rem 0.5rem;
`;

export const Name = styled.p`
  color: #282828;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
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
