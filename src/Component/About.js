import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'react-bootstrap/Image';
import Ahmad from './imgv/Ahmad.jpg';
import Fadia from './imgv/Fadia.jpg';
import Nadeem from './imgv/Nadeem.jpg';
import Roa from './imgv/Roa.jpg';
import Shaheenaz from './imgv/Shahenaz.jpg';
import Vickey from './imgv/Vickey.JPG';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import './about.css';
// import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


class About extends React.Component {

    render() {
        return (
            <>
            <div className="blockAbout">
                <h1 className='textAbout'>
                Avocado Web Application is an idea for a project that we decided to start implementing. It is a suitable place for anyone who wants to start a healthy life.
On this website’s main page you will find everything lifestyle related to nutrition, fitness, and sport.
as it provides him with a wide range of food, which he can search for recipes according to the number of calories he wants, and also sports is an important part to complete the activity of the body. There are many multiple workouts that combine The indoor workouts when workouts outdoor
  And for those who are looking for coaches help, there are training sessions at different levels
We always strive for excellence in our field.
                </h1>
               
            </div>
            <div className="divImages">
            <h1 className='meetText'>
                     Meet the team
                </h1>

                   <OverlayTrigger
                     className="card"
                       trigger="click"
                       placement="bottom"
                       overlay={
                           <Popover id={`popover-positioned-bottom`}>
                               <Popover.Title as="h3">{`Roa Mustafa`}</Popover.Title>
                               <Popover.Content>
                                   <strong> <AiFillGithub /> github.com/RoaaMustafa</strong> 
                               </Popover.Content>
                           </Popover>
                       }
                   >
                       
                       <Image src={Roa} roundedCircle width="120" height="120" className="img"  />
                   </OverlayTrigger>

                   <OverlayTrigger
                   className="card"
                       trigger="click"
                       placement="bottom"
                       overlay={
                           <Popover id={`popover-positioned-bottom`}>
                               <Popover.Title as="h3">{`Ahmad Abu Sailik`}</Popover.Title>
                               <Popover.Content>
                                   <strong> <AiFillGithub /> github.com/AhmadSailik</strong> 
                               </Popover.Content>
                           </Popover>
                       }
                   >
                       
                       <Image src={Ahmad} roundedCircle width="120" height="120" className="img"  />
                   </OverlayTrigger>

                   <OverlayTrigger
                   className="card"
                       trigger="click"
                       placement="bottom"
                       overlay={
                           <Popover id={`popover-positioned-bottom`}>
                               <Popover.Title as="h3">{`Victoria Fares`}</Popover.Title>
                               <Popover.Content>
                                   <strong> <AiFillGithub /> github.com/Victoria-FZ-eng</strong> 
                               </Popover.Content>
                           </Popover>
                       }
                   >
                       
                       <Image src={Vickey} roundedCircle width="120" height="120" className="img"  />
                   </OverlayTrigger>

                   <OverlayTrigger
                   className="card"
                       trigger="click"
                       placement="bottom"
                       overlay={
                           <Popover id={`popover-positioned-bottom`}>
                               <Popover.Title as="h3">{`Nadeem Mazahreh`}</Popover.Title>
                               <Popover.Content>
                                   <strong>  <AiFillGithub /> github.com/Nadeemmazahreh</strong> 
                               </Popover.Content>
                           </Popover>
                       }
                   >
                       
                       <Image src={Nadeem} roundedCircle width="120" height="120" className="img"  />
                   </OverlayTrigger>

                   <OverlayTrigger
                   className="card"
                       trigger="click"
                       placement="bottom"
                       overlay={
                           <Popover id={`popover-positioned-bottom`}>
                               <Popover.Title as="h3">{`Shaheenaz Zuwayyed`}</Popover.Title>
                               <Popover.Content>
                                   <strong> <AiFillGithub /> github.com/shaheenaz</strong>
                               </Popover.Content>
                           </Popover>
                       }
                   >
                       
                       <Image  src={Shaheenaz} roundedCircle width="120" height="120" className="img"  />
                   </OverlayTrigger>

                   <OverlayTrigger
                   className="card"
                       trigger="click"
                       placement="bottom"
                       overlay={
                           <Popover id={`popover-positioned-bottom`}>
                               <Popover.Title as="h3">{`Fadia Al-dasouqi`}</Popover.Title>
                               <Popover.Content>
                                   <strong><AiFillGithub /> github.com/Al-dasouqi</strong> 
                               </Popover.Content>
                           </Popover>
                       }
                   >
                       
                       <Image src={Fadia} roundedCircle width="120" height="120" className="img"  />
                   </OverlayTrigger>

               </div>



               

            </>
        )
    }
}

export default About;