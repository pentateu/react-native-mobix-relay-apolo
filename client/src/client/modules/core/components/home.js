/**
 * Created by rn1466 on 27/08/16.
 */
import React, {Component} from 'react';
import {Container, Header, Title, Content, Button} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Home extends Component {
    render() {
        return (
          <Container>
              <Header>
                  <Title>ESTAPARK</Title>
              </Header>
              <Content>
                <Grid style={{ backgroundColor:'blue' }}>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>Pay Parking</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>Forms</Button>
                        </Col>
                        <Col>
                            <Button>Login</Button>
                        </Col>
                    </Row>

                </Grid>
              </Content>
          </Container>
        );
    }
}