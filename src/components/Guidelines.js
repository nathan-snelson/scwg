import { ListGroup } from 'react-bootstrap';

let guidelines = [
    'ALL MEMBERS TO PROVIDE CONTACT DETAILS IN CASE IT IS NEEDED TO TRACE AND TRACK',
    'FACEMASK/COVERINGS TO BE WORNAT ALL TIMES WHILE IN THE HALL',
    'ALL MEMBERS MUST USE THE HAND SANITZER/WIPES PROVIDED BEFORE START OF GAMING',
    'ALL PAYMENTS FOR CLUB/FOOD WILL BE BY PAYPAL OR BANK TRANSFER WHERE POSSIBLE',
    'ALL EQUIPMENT USED BY MEMBERS IS TO BE SANITISED BEFORE AND AFTER USE',
    'ONLY ONE PERSON AT A TIME TO USE TOILET CUBICLES/FACILITIES',
    'NO MEMBERS PERMITTED IN THE KITCHEN AREA APART FROM AUTHORISED MEMBERS',
    'ALL MEMBERS TO PROVIDE THEIR OWN EATING/DRINKING UTENSILS FOR CONSUMING ANY FOOD/DRINKS ON THE PREMISES',
    'ALL CLUB SCENERY STORAGE BINS TO BE SANTISED BEFORE/AFTER USE',
    'ONLY ONE MEMBER PER TABLE TO PUT OUT/AWAY GAMING BOARDS/SCENERY'
]

export const Guideline = () => {
    return (
        <>
            <h2 className="text-uppercase text-center">COVID-19 Guidelines</h2>
            <hr/>
            <ListGroup>
                {guidelines && guidelines.map((value,count) => {
                    return <ListGroup.Item key={count}>{value}</ListGroup.Item>
                })}
            </ListGroup>
        </>
    )
}