import { useState } from "react";
import Button from "../button";
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { Card, Header, Section } from "./style";


interface CardProps {
    config: React.ReactNode,
    children?: React.ReactNode
}

const ExpandablePanel = ({ config, children }: CardProps) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(!show)

  return (
    <Card>
      <Header>
        <Section>
          {config}
        </Section>

        <Section>
          <Button handleClick={handleShow}>
            {show ? <GoChevronDown/> : <GoChevronLeft/>}
          </Button>
        </Section>
      </Header>

      {show && children}
    </Card>
  );
};

export default ExpandablePanel;
