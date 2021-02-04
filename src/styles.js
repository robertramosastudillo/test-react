import styled from "@emotion/styled";

// ALERTS
const ErrorAlert = styled.p`
  display: block;
  background-color: red;
  font-size: 14px;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
`;

// ALERTS

// NAVBAR
const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #3581b8;
`;

const Logo = styled.p`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  @media (max-width: 348px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  background-color: orange;
  border: none;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  transition: all(0.3 ease-in);
  font-size: 0.9rem;
  &:hover {
    background-color: #c44900;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// NAVBAR

const Container = styled.div`
  /* CSS GRID */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
  text-align: center;
`;

// TABLE

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const Thead = styled.thead`
  background-color: #3581b8;
  color: #ffffff;
  font-weight: bold;
`;

const TH = styled.th`
  padding: 12px 15px;
`;

const TD = styled.td`
  padding: 12px 15px;
`;

const TR = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #3581b8;
  }
`;

export {
  Nav,
  Logo,
  Container,
  Button,
  Menu,
  ErrorAlert,
  Table,
  Thead,
  TH,
  TD,
  TR,
};
