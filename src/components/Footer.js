import { Segment, Container, Grid, Header, List, Button } from "semantic-ui-react";

function Footer() {
  return (
    <div>
        <Segment>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header>
                                <List>
                                    <List.Item>Sitemap</List.Item>
                                    <List.Item>Contact Us</List.Item>
                                    <List.Item>FAQ's</List.Item>
                                </List>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
      
    </div>
  )
}

export default Footer
