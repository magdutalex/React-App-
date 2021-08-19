import React from "react";
import { Container, Title, Text } from "./Content.style"


const Content = ({titlePrimit, textPrimit, img}) => {
    return(
        <Container>
         <Title>{titlePrimit}</Title>
         <Text>{textPrimit}</Text>
      
        </Container>

    );
};

  export default Content;