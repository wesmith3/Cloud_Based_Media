import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
} from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTiktok, faInstagram, faYoutube, faFacebook, faKickstarter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div>
      <Segment>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header />
                  <List>
                    <List.Item>Sitemap</List.Item>
                    <List.Item>Contact Us</List.Item>
                    <List.Item>FAQ's</List.Item>
                  </List>
              </Grid.Column>
              <Grid.Column>
                <Header />
                <List>
                    <List.Item>
                        Wesley Smith
                    </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
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
