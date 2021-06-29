import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillGithub} from 'react-icons/ai';
import Image from 'react-bootstrap/Image';
import Ahmad from './imgv/Ahmad.jpg';
import Fadia from './imgv/Fadia.jpg';
import Nadeem from './imgv/Nadeem.jpg';
import Roa from './imgv/Roa.jpg';
import Shaheenaz from './imgv/Shahenaz.jpg';
import Vickey from './imgv/Vickey.JPG';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './about.css';



class About extends React.Component {

    render() {
        return (
            <>
            <div class="auther">
            <CardGroup className="group">
                <Card style={{ width: '18rem' }} className="card">
                    <Image src={Roa} roundedCircle width="120" height="120"  className="img"/>
                    <Card.Body>
                        <Card.Title>Roa Mustafa</Card.Title>
                        <Card.Text>
                            <AiFillGithub/> github.com/RoaaMustafa
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                <Image src={Vickey} roundedCircle width="120" height="120" className="img" />
                    <Card.Body>
                        <Card.Title>Victoria Fares</Card.Title>
                        <Card.Text>
                        <AiFillGithub/> github.com/Victoria-FZ-eng
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                <Image src={Ahmad} roundedCircle width="120" height="120"  className="img"/>
                    <Card.Body>
                        <Card.Title>Ahmad Abu Sailik</Card.Title>
                        <Card.Text>
                        <AiFillGithub/> github.com/AhmadSailik
                        </Card.Text>

                    </Card.Body>
                </Card>
               
                </CardGroup>
                <CardGroup className="group">
               
                <Card style={{ width: '18rem' }} className="card">
                <Image src={Nadeem} roundedCircle width="120" height="120" className="img"/>
                    <Card.Body>
                        <Card.Title>Nadeem Mazahreh</Card.Title>
                        <Card.Text>
                        <AiFillGithub/> github.com/Nadeemmazahreh
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                    <Image src={Shaheenaz} roundedCircle width="120" height="120"  className="img"/>
                    <Card.Body>
                        <Card.Title>Shaheenaz Zuwayyed</Card.Title>
                        <Card.Text>
                        <AiFillGithub/> github.com/shaheenaz
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                <Image src={Fadia} roundedCircle width="120" height="120" className="img"/>
                    <Card.Body>
                        <Card.Title>Fadia Al-dasouqi</Card.Title>
                        <Card.Text>
                        <AiFillGithub/> github.com/Al-dasouqi
                        </Card.Text>

                    </Card.Body>
                </Card>
                </CardGroup></div>


               

            </>
        )
    }
}

export default About;