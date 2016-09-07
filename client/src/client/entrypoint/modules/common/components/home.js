/**
 * Created by rn1466 on 27/08/16.
 */
import React, {Component} from 'react';
import {Container, Header, Title, Content, Button} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
    render() {
        return (
          <Container>
              <Content style={{ backgroundColor:'blue'}}>
                <Grid size={100}>
                    <Row height={240}/>
                    <Row><Col>
                        <Button block
                                onPress={() => Actions.screen2()}>Go to Screen 2</Button>
                    </Col></Row>
                    <Row />
                </Grid>
              </Content>
          </Container>
        );
    }
}