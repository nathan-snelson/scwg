import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const AlertDismissable = () => {
    const [show, setShow] = useState(true);
    
    return (
        <>
            <Alert show={show} variant="warning">
                <Alert.Heading>Warning!</Alert.Heading>
                <p>
                    Due to <a href="https://www.gov.uk/government/collections/coronavirus-covid-19-list-of-guidance" target="_blank" rel="noreferrer">COVID-19</a> club activity has been postponed until further notice.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-warning">
                        Close
                    </Button>
                </div>                
            </Alert>
            
            {/*!show && <div className="d-flex justify-content-center"><Button onClick={() => setShow(true)} variant="outline-primary">Show Alert</Button></div>*/}
        </>
    );
}

export default AlertDismissable;