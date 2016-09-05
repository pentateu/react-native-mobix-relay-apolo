/**
 * Created by rn1466 on 27/08/16.
 */
import React, {Component} from 'react';
import {Container, Header, Title, Content, Button} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';

export default class Screen2 extends Component {

    render() {
        return (
          <Container>
              <Content style={{ backgroundColor:'green' }}>
                <Grid>
                    <Row height={240}/>
                    <Row>
                        <Col>
                            <Button block
                                    onPress={()=>Actions.pop()}>Back to Home</Button>
                        </Col>
                    </Row>
                </Grid>
              </Content>
          </Container>
        );
    }
}