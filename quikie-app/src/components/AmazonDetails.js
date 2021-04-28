

import { Button, Card } from 'react-bootstrap';
import img1 from '../Assets/AMZN.svg';


const Amazon = () => {
    return (
        <div style={{ margin: '5px auto' }}>

            < Card style={{ width: '35rem', padding: '10px', margin: '10px auto' }}>
                <Card.Img variant="top" src={img1} style={{ width: '10rem', margin: "2px auto" }} />
                <hr></hr>
                <Card.Body>
                    <Card.Title>Amazon </Card.Title>
                    < Card.Text > Stock Symbol:<b>AMZ </b> </Card.Text>
                    < Card.Text > Market Cap:<b>$ 4.56</b>  </Card.Text>
                    < Card.Text > Current price:<b>$55.90</b> </Card.Text>
                    <Button variant='primary'  >Buy Shares</Button>
                </Card.Body>
            </Card>




        </div >
    );
}

export default Amazon;
