import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const FAQ = () => {
  return (
    <Accordion id="faq" defaultActiveKey="0">
      <div>
        <h1>FAQ</h1>
        <br />
        <h2>Matching A Patient</h2>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How is a bone marrow match determined?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Doctors look for a donor who matches their patient's tissue type,
              specifically their human leukocyte antigen (HLA) tissue type. HLAs
              are proteins — or markers — found on most cells in your body. Your
              immune system uses these markers to recognize which cells belong
              in your body and which do not. The closer the match between the
              patient's HLA markers and yours, the better for the patient.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              How likely is it that I will match a patient and go on to donate?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              On average, about 1 in 430 U.S. Be The Match Registry members will
              go on to donate bone marrow or peripheral blood stem cells (PBSC)
              to a patient. Because of the vast variation in tissue types, we
              can't predict an individual registry member's chance of donating
              to a patient. If you have a relatively common tissue type, you
              might be one of many who could match a searching patient. If you
              have an uncommon tissue type, you may never match a patient, or
              you might be the only one out of more than 22 million potential
              donors on the registry who can save a person's life. Every person
              who joins the registry gives patients more hope of finding the
              match they need. The most important thing you can do as a registry
              member is to stay informed and committed so that if you're
              selected as the best donor, you're ready to move forward.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              What happens if I match a patient?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                More testing will be done to see if you are the best possible
                match for the patient. We may ask for another cheek swab or
                blood sample or we may be able to use a stored sample. Though
                almost all patient information is confidential, we can tell you
                the patient's age, gender and disease.
              </p>
              <p>
                If the patient's doctor selects you as the best donor for the
                patient, we will schedule an information session so you can
                learn more about the donation process, risks and side effects.
                At that time, we can also tell you the type of donation the
                patient's doctor has requested — either bone marrow or cells
                collected from the blood, (PBSC) donation.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      <br />
      <div>
        <h2>Deciding To Donate</h2>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Can I change my mind?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                You have the right to change your mind about being a donor at
                any time. Donating is always voluntary.
              </p>
              <p>
                If you decide you do not want to donate, let us know right away.
                We will need to continue the search for another donor without
                dangerous — even life-threatening — delays for the patient.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              How are bone marrow and peripheral blood stem cell (PBSC) donation
              different?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>
                Donating bone marrow is a surgical procedure done under general
                or regional anesthesia in a hospital. While a donor receives
                anesthesia, doctors use needles to withdraw liquid marrow from
                the back of the pelvic bone.
              </p>
              <p>
                PBSC donation is a non-surgical procedure done in an outpatient
                clinic. PBSC donors receive daily injections of a drug called
                filgrastim for five days, to increase the number of
                blood-forming cells in the bloodstream. Then, through a process
                called apheresis, a donor's blood is removed through a needle in
                one arm and passed through a machine that separates out the
                blood-forming cells. The remaining blood is returned to the
                donor through the other arm.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              How will I know if I'm asked to donate bone marrow or PBSC?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              When you join the registry, you agree to donate by whichever
              method is needed. The patient's doctor asks for either marrow or
              PBSC, depending on what is best for the patient.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Who pays for the donation process?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <p>
                Donors never pay for donating, and are never paid to donate.
              </p>
              <p>
                All medical costs for the donation procedure are covered by the
                National Marrow Donor Program® (NMDP), which operates the Be The
                Match Registry®, or by the patient's medical insurance, as are
                travel expenses and other non-medical costs. The only costs to
                the donor might be time taken off from work.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              How long does donating take?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <p>
                Becoming a donor requires a time commitment. Before you donate,
                there are several steps to make sure you are the best donor for
                the patient. These steps include an information session to
                provide resources to help you make your decision, as well as
                appointments for additional blood tests and a physical exam. The
                time needed for the actual donation depends on the donation
                procedure.
              </p>
              <p>
                The typical time commitment for the donation process is 20-30
                hours of your time spread out over a four-to-six-week period.
                This does not include travel time, which is defined by air
                travel and staying overnight in a hotel. Nearly 40% of donors
                will travel during the donation process. Marrow and PBSC
                donation require about the same total time commitment.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    </Accordion>
  );
};
export default FAQ;
