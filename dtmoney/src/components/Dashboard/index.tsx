import { Summary } from "../Summary";
import { TransectionTable } from "../TransectionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransectionTable />
    </Container>
  );
}
