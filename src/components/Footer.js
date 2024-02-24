import {
    Segment,
    Container,
    Grid,
    Header,
    List,
    Button
  } from "semantic-ui-react";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faXTwitter, faTiktok, faInstagram, faYoutube, faFacebook, faKickstarter } from '@fortawesome/free-brands-svg-icons';
  import '../styles/footer.css'
  
  function Footer() {
    return (
      <div className="footer">
        <Segment vertical style={{ padding: "2em 0em" }}>
          <Container>
            <Grid divided>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header as="h4" content="About" />
                  <List link>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">FAQ's</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Header as="h4" content="Architect" />
                  <List link>
                    <List.Item as="a" href="https://github.com/wesmith3">
                      Wesley Smith
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h4">
                    Follow Cloud Based Media!
                  </Header>
                  <div className="brand-icons">
                    <FontAwesomeIcon className="fb-icon" size="3x" icon={faFacebook}/>
                    <FontAwesomeIcon className="tt-icon" size="3x" icon={faTiktok} />
                    <FontAwesomeIcon className="x-icon" size="3x" icon={faXTwitter}/>
                    <FontAwesomeIcon className="insta-icon" size="3x" icon={faInstagram}/>
                    <FontAwesomeIcon className="yt-icon" size="3x" icon={faYoutube}/>
                    <FontAwesomeIcon className="ks-icon" size="3x" icon={faKickstarter} />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
  
  export default Footer;
  