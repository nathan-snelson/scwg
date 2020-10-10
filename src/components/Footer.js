import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { footer } from '../styles';

const styles = {
    position: footer.position,
    left: footer.left,
    bottom: footer.bottom,
    right: footer.right
}

export const Footer = () => {
    return (
        <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4" style={styles}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Useful Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            Facebook: <a href="https://www.facebook.com/groups/steelcitywargaming"> SCWG Group  </a>
                        </li>
                        <li className="list-unstyled">
                            Twitter: <a href="https://twitter.com/SCWFrontLine"> SCWargamer </a>
                        </li>
                        <li className="list-unstyled">
                            Instagram: <a href="https://www.instagram.com/steelcity_wargaming_/?hl=en">  steelcity_wargaming_ </a>
                        </li>
                        <li className="list-unstyled">
                            Source code: <a href="https://github.com/nathan-snelson/scwg">  nathan-snelson </a>
                        </li>
                        </ul>
                    </MDBCol>                    
                </MDBRow>                
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}