import React from "react";

import { Card, Accordion, Button } from "react-bootstrap";

const FAQ = () => {
  return (
    <Accordion id="faq">
      <div>
        <h1>FAQ</h1>
        <br />
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              What are HLAs and what is tissue typing?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              The important factor in tissue type is the Human Leukocyte Antigen
              (HLA), which is a complex of genes in every person's DNA that
              regulates the immune system. They are also responsible for whether
              a transplant is accepted or rejected by the body, so a good match
              is crucial. Tissue typing is the laboratory process where a tissue
              sample collected from inside the patient's cheek on a cotton swab
              (or possibly via a blood draw) is analyzed to determine the HLA
              types. Ten HLA factors are determined, and once the HLAs for a
              patient are known, the search for a matching donor can be started.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Family members as potential donors
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Since HLA are a genetic factor inherited from parents, it is
              logical to turn first to family members and test for a match.
              However, because the genes we inherit are a combination from our
              parents, only 30 percent of those seeking a transplant match find
              a donor within their own family. Those who don’t find a match
              within the family (70 percent of patients do not find one) can
              search the worldwide marrow donor registries to find a match.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Searching the worldwide registry, including Gift of Life's
              registry
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              The worldwide registries, including Gift of Life Marrow Registry,
              are made up of volunteer donors who offer to become bone marrow or
              blood stem cell donors in the event they are determined to be an
              HLA match with the recipient. Searches are done through a central
              database called Bone Marrow Donors Worldwide, which links to
              registries around the world that hold the tissue type information
              of over 34 million volunteer donors. That sounds like a large
              number, yet the world population is 7.7 billion, so volunteer
              donors comprise 0.44 percent of the world population, less than
              one-half of one percent.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Finding a perfect match
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Perfect matches can be found in the registry, even though the
              donor and recipient are not siblings. When two people share an
              ethnic background, there is a chance that their HLAs will match up
              and the donation can take place.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              The importance of diversity in the registry
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Ethnicity and ancestry play a big role in the ability to find a
              match – some ethnic groups are underrepresented in the registries,
              making it difficult for some people in need to find their match.
              Building the diversity of the registries is a mission of Gift of
              Life – adding diversity to the registry will result in more
              life-saving matches for those in dire need.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              What is a haploidentical transplant?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              If a perfect HLA match is not available, a haploidentical
              transplant is often recommended. This means the donor is a
              half-match for the recipient. Parents are always at least a
              half-match for their children, and siblings have a 50 percent
              chance of being a half-match for each other, and a 25 percent
              chance of being a perfect match.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              What is an umbilical cord blood transplant?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              Cord blood is simply collected after a baby’s birth. It is
              packaged and shipped to a repository where it is tested and
              processed, then frozen in liquid nitrogen. If a patient’s tissue
              type matches that of a cord blood unit, it is sent to the
              patient’s hospital for a transplant. Because cord blood stem cells
              are immature, a perfect match is not necessary.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              What if no match is found in the registry?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              If no match is found in the worldwide registry, that doesn’t mean
              no match exists, but that no one who is a match has yet registered
              as a donor. The family and friends of a patient can start a donor
              recruitment drive to try and find a match among the new donors
              they sign up. Gift of Life provides support for patients and their
              families in organizing, publicizing and running donor drives,
              including the online tool called Donor Circles, a way to create a
              central hub for a recruitment drive, with tools for live tracking
              of results, including matches and transplants that come from among
              a circle’s sponsored donors.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      <br />
      <div>
        <h2>The Donation Process</h2>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="8">
              About marrow donor registries
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              Because only 30 percent of patients needing a transplant find a
              match among family members, 70 percent of patients must rely on
              volunteer bone marrow and blood stem cell donors who have joined
              one of the worldwide donor registries. Gift of Life is one of two
              public registries in the United States, and is a member of the
              World Marrow Donor Association (WMDA).
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              How do people become donors?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <p>
                Volunteer donors can join the Gift of Life registry either at a
                donor drive, or by requesting a swabbing kit on our website or
                by calling 800-9MARROW.
              </p>
              <p>
                Many people join registries at recruitment drives. Most drives
                today use swabbing kits, which use cells collected on a giant
                cotton swab from the inside of the cheek. The swabs are packaged
                and sent to a lab for tissue typing to determine the HLA
                markers. Once the tissue type is determined, that information is
                entered in the registry and made available for worldwide
                searches by transplant centers and physicians.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="10">
              Age matters!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              While anyone between 18 and 60 can join the registry, the most
              frequently requested donors are young and male. Young people
              produce more stem cells, and due to their larger physical size,
              men produce more stem cells. The most requested donor group is 18
              to 35, yet all donors can remain in the registry until their 61st
              birthday, and plenty of donors are called from the 36 to 60 group!
              Gift of Life actively encourages young people to join the registry
              through several educational programs, including the Campus
              Ambassador Program for college students and Senior Swabbers for
              high schools students.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="11">
              What happens when a donor is identified as a match?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              When a donor comes up in the database as a match, the registry he
              or she joined is contacted by the transplant center, and asked to
              call the donor in for Confirmatory Typing.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="12">
              The Confirmatory Typing process
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              The prospective donor is asked for a blood draw that is sent to a
              laboratory for an in-depth HLA analysis to find out exactly how
              closely the potential donor's human leukocyte antigens — key
              factors in the immune system — match up with the recipient’s
              tissue type. A match may be a partial or a perfect match. At the
              same time, tests for infectious diseases are conducted.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="13">
              The importance of commitment
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="13">
            <Card.Body>
              The Confirmatory Typing (CT) team will counsel the prospective
              donor about the donation process, and ensure that the donor is
              fully committed to the donation. This commitment is important,
              because once the donation is scheduled, the recipient undergoes
              rigorous treatments to clear their body of diseased blood cells,
              including chemotherapy and/or radiation therapy. This completely
              depletes their immune system and their own bone marrow, meaning
              they are no longer capable of producing blood cells on their own.
              At that point, if the transplant does not happen, the patient will
              not survive.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="14">
              The Work Up process
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="14">
            <Card.Body>
              <p>
                Once the donor has committed to the donation, the Work Up
                Coordinator will arrange the donation. Whether the donation will
                be peripheral blood stem cells or bone marrow, everything must
                be set in motion so that the transplant occurs exactly when the
                patient is ready. The Work Up team will arrange for the donor to
                have a physical exam as well as any required transplant
                preparation, such as injections of Neupogen to stimulate stem
                cell production.
              </p>
              <p>
                The Work Up team also makes travel arrangements, if needed. A
                representative from Gift of Life will be present throughout the
                donation process, ensuring that the donor has everything needed
                – such as food, transportation and moral support. Gift of Life
                does everything possible to make donation a seamless process for
                the donor and his or her family.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="15">
              Donating peripheral blood stem cells (PBSCs)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
              <p>
                Approximately 80 percent of hematopoietic stem cell transplants
                in the United States are done through PBSC collection. Donors
                providing PBSCs must be prepared for several days in advance – a
                daily injection is given to stimulate the stem cells to move out
                of the marrow and into the blood stream. The first injection is
                given at a clinic, and following injections are done by a
                visiting nurse at the donor’s home.
              </p>
              <p>
                At the donation center the donor’s blood is drawn from one arm
                to pass through an apheresis machine, and is then returned into
                the other arm. Inside the machine, the blood is separated into
                its components and the stem cells only are separated out and
                collected. The process may take several hours, and it is
                important for the donor to eat soon after donation. A Gift of
                Life representative is always there help to ensure that every
                donor is well taken care of!
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="16">
              Recovery from donating PBSCs
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="16">
            <Card.Body>
              Stems cells regenerate naturally, so donors providing PBSCs
              normally feel fully recovered in 24 to 36 hours.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="17">
              Donating bone marrow
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="17">
            <Card.Body>
              <p>
                Approximately 20 percent of hematopoietic stem cell transplants
                in the United States are done through bone marrow collection,
                which is most often requested for pediatric patients. Those
                donating bone marrow will have a surgical procedure under
                general anesthesia. Marrow is drawn from the largest bone in the
                body, the hip bone, specifically from the iliac crest – easily
                found by putting your hands on your hips with thumbs forward and
                fingers towards your back. The iliac crest is the ridge you can
                feel under your fingers on each side.
              </p>
              <p>
                Marrow is extracted from both sides at the same time to speed up
                the process. Doctors use a special syringe to draw the marrow
                out of the bone. The process is normally completed in under two
                hours.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="18">
              Recovery after marrow donation
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="18">
            <Card.Body>
              Recovery can take several days, as the bone marrow naturally
              regenerates. Donors often report their back is sore for anywhere
              from one to three days afterwards, treatable with over the counter
              pain relievers. Most return to work within one to two days, and
              usually return to normal levels of exercise within a week or ten
              days, depending on how fast the marrow regenerates.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="19">
              What happens to the donation?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="19">
            <Card.Body>
              Once the bone marrow or blood stem cells are collected and
              prepared, they are carried in cooled containers by a courier to
              the transplant center where the recipient will receive his or her
              transplant. The package never leaves the courier’s hands, and
              qualifies for a special customs clearance if the transplant center
              is overseas.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="20">
              Why was the donation delayed?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="20">
            <Card.Body>
              Everything in the donation process is designed to ensure that the
              patient is fully prepared to receive the transplant so he or she
              will have the best chance of recovery. Sometimes delays occur due
              to the patient needing more time in the preparation process. A
              Work Up Coordinator will keep every donor informed as much as
              possible.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="21">
              Why can’t I donate? Will I be able to in the future?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="21">
            <Card.Body>
              <p>
                Part of the donation process involves a thorough review of any
                past illnesses or current conditions that may prevent you from
                donating. Some of these have to do with protecting the donor's
                health, and most are designed to protect the recipient. Many
                people who cannot donate bone marrow due to back or hip injuries
                or conditions may still donate peripheral blood stem cells.
              </p>
              <p>
                Anyone with a <b>temporary condition</b> that prevents them from
                donating now may be able to donate in the future. This donor's
                status will be put on hold until a determination is made that he
                or shee can reenter the registry.
              </p>
              <p>
                <b>Pregnant women</b> may not donate while pregnant, due to the
                production of antibodies that can cause rejection of the
                transplant (Graft-Versus-Host disease). Three months after
                delivery of the child, women may once again donate bone marrow
                and peripheral stem cells.
              </p>
              <p>
                If a prospective donor is called but later on the{" "}
                <b>donation is cancelled</b>, it is possible that several
                matches were available and another donor was selected for
                transplant. The donation coordinator will share available
                information where possible, but details may not be available
                from the transplant center.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      <br />
      <div>
        <h2>The Transplant Process</h2>
        <p>
          The transplant process can take time, and includes the conditioning
          regimen to prepare the patient, the transplant itself, and the
          engraftment period.
        </p>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="22">
              The Conditioning Regimen
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="22">
            <Card.Body>
              <p>
                Once a donor has been found and medically cleared, the patient
                undergoes a conditioning regimen to destroy the diseased cells
                and the entire immune system, to ensure that the body does not
                attack the healthy new cells it is about to receive. This can
                take one of two forms: myeloablative (MY-ello-uh-BLAY-tiv) or
                non-myeloablative.
              </p>
              <p>
                <b>Myeloablative transplant</b> involves the use of chemotherapy
                and/or radiation therapy. The choice of these and how to balance
                them depends on many factors, so the best treatment regimen for
                each patient is created by the physician and the transplant
                center.
              </p>
              <p>
                <b>Non-myeloablative transplant</b> is a reduced-intensity
                treatment that relies in part on the patient’s own immune system
                to fight the disease. This method may be an option for older
                patients.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="23">
              Ready for transplant
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="23">
            <Card.Body>
              With the conditioning regimen completed, the patient is ready to
              receive the transplant of either bone marrow or peripheral blood
              stem cells. The donated cells are infused into the patient through
              an IV line, and on their own will find their way through the body
              into the bone marrow to begin creating healthy blood cells and a
              new immune system. This process is called engraftment.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="24">
              Engraftment
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="24">
            <Card.Body>
              The engraftment can take several weeks, as the donated cells get
              settled in and start their work. This is often when patients
              experience the most discomfort, as they have no immune system to
              protect them, and side effects of chemo or radiation therapy may
              emerge. With the engraftment process underway, blood is taken
              frequently to look for indications that the transplant cells have
              taken hold, with new blood and immune system cells being formed.
              It can be a frustrating wait, as the patient must remain in a
              clean isolation room to prevent infections.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="25">
              Graft vs. Host Disease
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="25">
            <Card.Body>
              One of the conditions that the physician will monitor for during
              engrafment is graft vs. host disease. It can occur if the donated
              cells perceive the recipient’s cells as foreign and attack the
              recipient’s body. Areas that can be affected include the skin,
              eyes, liver, and gastrointestinal tract. The physician will
              discuss strategies with the patient to increase comfort and
              minimize the risk and severity of this, and other, side effects.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      <br />
      <div>
        <h2>About Transplant Recovery</h2>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="26">
              After the transplant
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="26">
            <Card.Body>
              Once a patient has received the transplant and the engraftment
              process is underway, the recipient is susceptible to infections.
              The hospital stay helps keep patients in a clean environment until
              the immune system has reached a stronger level.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="27">
              Caregiving
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="27">
            <Card.Body>
              Being a caregiver is an important responsibility with many facets,
              and it is important for caregivers to take care of themselves.
              Those in the caregiver role may be trying to learn new medical
              information, provide emotional support for the patient, care for
              children and a home, and go to work all at the same time!
              Caregivers should not hesitate to ask for – and accept – help.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="28">
              Survival Rates
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="28">
            <Card.Body>
              Due to significant medical achievements in recent decades,
              survival rates are higher than ever for bone marrow and PBSC
              transplants. Greater understanding of the human immune system, the
              ability to look closely at genetic factors, and improved methods
              of collection and treatment have all made the transplant process
              more likely to succeed.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="29">
              Recovery time
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="29">
            <Card.Body>
              The time needed to recover can vary, but transplant recipients can
              look forward to engaging in more and more activities over time,
              and returning to a normal daily routine with family and friends.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      <br />
      <div>
        <h2>About Tissue Typing</h2>
        <p>
          When someone is diagnosed with a blood cancer or an immune system
          disorder, he or she may learn from the doctor that the best chance for
          a long term cure is through a bone marrow or peripheral blood stem
          cell transplant. The search then begins to find a donor with a
          matching tissue type, a search that is determined by{" "}
          <b>human leukocyte antigens</b>, or HLAs.
        </p>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="30">
              Why does a transplant work when other treatments do not?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="30">
            <Card.Body>
              In reality, not every blood cancer cell can be killed by
              chemotherapy or radiation treatments. The patient’s own immune
              system must be able to recognize and destroy the residual cancer
              cells that remain after treatment, otherwise there is a good
              chance for the cancer to return. Many times, the patient’s immune
              system is overwhelmed or is not functioning enough to destroy the
              cancer cells. When a patient receives a bone marrow or stem cell
              transplant, he or she will receive both the donor’s stem cells
              that produce all the normal blood cells, and the donor’s immune
              cells that can recognize and destroy any residual cancer cells.
              Because of this improved immunity, stem cell transplants are often
              more effective than just chemotherapy or radiation therapy alone.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="31">
              Why must the donor and the recipient match?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="31">
            <Card.Body>
              <p>
                Every one of us has an immune system that can differentiate
                “self” from “not-self.” The immune system allows cells that are
                identified as “self” to survive inside the body. However, it
                recognizes and then destroys cells that are “not self,” such as
                viruses, cancer cells, bacteria and others. When we transplant
                one person’s cells into another, the closer the match the
                greater the chance that the donated cells will survive and not
                be destroyed.
              </p>
              <p>
                In addition, the closer the match, the less likely it is that
                the new, transplanted cells will see the patients’ cells as “not
                self” and try to destroy them. This is called “Graft Versus Host
                Disease” and can cause complications after the transplant. When
                very severe, it can even result in the death of the recipient.
                Therefore, the goal of every transplant is to match the donor’s
                cells to the patient’s cells as closely as possible.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="32">
              How does the immune system know which cells are “self” and which
              are “not-self”?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="32">
            <Card.Body>
              <p>
                On the surface of all cells are proteins, carbohydrates and
                sugars called “antigens.” Half of these antigens are inherited
                from the mother and half from the biological father. The immune
                system identifies these antigens as either “self” or “not-self."
                In humans these antigens are called{" "}
                <b>Human Leukocyte Antigens</b> (or HLAs for short).
              </p>
              <p>
                When the immune system finds cells that it deems to be "not
                self," it destroys them to prevent diseases. In the case of a
                transplant, if the immune cells that came from the donor start
                to see the recipient's cells as enemies, they may attack the
                recipient's cells and organs.
              </p>
              <p>
                If the HLA types of the donor and patient are matched, then the
                transplanted cells will likely survive and function normally
                inside the recipient’s body without harming the recipient.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="33">
              What are Human Leukocyte Antigens?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="33">
            <Card.Body>
              <p>
                The HLA system determines the cell-surface proteins,
                carbohydrates and sugars that serve as the identification cards
                of the cells. They come in a large number of combinations. HLA
                types are sorted into groups, with those most commonly tested
                including HLA-A, HLA-B, HLA-C, HLA-DRB1, HLA-DQB1 and HLA-DPB1.
                Each group has a large number of variations within it, which are
                given numbers. So you may have HLA-A7 and someone else has
                HLA-A30.
              </p>
              <p>
                From each of your parents you inherit one HLA set (HLA-A, HLA-B,
                HLA-C, HLA-DRB1, HLA-DQB1 and HLA-DPB1). This set is inherited
                together as a group called a “haplotype.” Every person has two
                HLA haplotypes, one from the mother and one from the biological
                father. Since we now have the ability to analyze DNA molecules,
                we have learned that there are at least 4,000 variations of the
                HLA-B gene alone! That means there are large numbers of possible
                haplotypes.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="34">
              Since HLA antigens are inherited, are relatives usually a match?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="34">
            <Card.Body>
              <p>
                You are always a half-match – or haploidentical – with each of
                your parents, since you inherited one of your two HLA haplotypes
                from each of them. That means that parents and children are
                always half matches, but never a full match.
              </p>
              <p>
                Since each parent can give one of two haplotypes to their
                offspring, there are four possible combinations of haplotypes in
                each child. Therefore, you have a 25 percent chance of
                inheriting the same two HLA haplotypes as one of your siblings,
                but you also have a 25 percent chance of having no matching HLA
                haplotypes. There is a 50 percent chance that you will share one
                haplotype with a sibling. Note that blood type is inherited from
                a different gene and is not related to a person’s HLA type.
              </p>
              <p>
                The chance of a match with a cousin drops to 16 percent.
                Nonetheless, it is still worthwhile to test extended family if
                available, given that at the very least they are just as likely,
                if not slightly more likely, to match over an unrelated donor.
              </p>
              <p>
                If the patient does not have a match with a family member (about
                75 percent of the time), then a search will be started among the
                international bone marrow registries, such as Gift of Life, for
                a non-related matching donor. Since there are thousands of
                possible haplotypes, the chances of an unrelated person
                inheriting the same HLA haplotypes as the patient is extremely
                rare. When we do find a full match, it is like winning the
                lottery.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="35">
              How do marrow registries find someone with a matching immune
              system?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="35">
            <Card.Body>
              <p>
                When a patient starts working with a transplant center, one of
                the first steps is to determine the patient’s HLA tissue type.
                At that time, other immediate family members are also typed. If
                there is no family member that matches, a search for an
                unrelated donor is undertaken by searching the computer files of
                the Bone Marrow Donors Worldwide (BMDW) registry. This
                international database contains the HLA types of the
                approximately 70 global registries combined. The HLA types
                listed in the registries were determined when individuals signed
                up and swabbed their cheeks.
              </p>
              <p>
                Sometimes multiple matches are found in the database, sometimes
                no match is found. Even though there are nearly 30 million
                people registered as bone marrow donors, the world population is
                over 7.4 billion people so the number of available donors is a
                small fraction, and some patients do not find any matching
                donors.
              </p>
              <p>
                For those who do not find a donor, organizing a donor drive may
                help to find that matching person. Searching among peoples of
                the same ethnic group and race or whose families came from the
                same geographic area may help in locating a match.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="36">
              Why do ethnicity, race and geography matter?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="36">
            <Card.Body>
              <p>
                The genes that determine HLA types are found in our DNA on human
                chromosome 6. These particular genes are naturally highly
                diverse and are called polymorphic by scientists – literally
                meaning "having multiple forms."
              </p>
              <p>
                When a group of people has geographic or cultural separation
                from other human populations for hundreds or thousands of years,
                genetic mutations can occur in that population that are passed
                to their descendants — but not the general human population.
                That group can develop a unique set of HLAs that may be rare, or
                even completely unique.
              </p>
              <p>
                When a patient from an ethnic group with uncommon or rare HLA
                types needs a transplant, the chances of finding a match among
                the general population is small. The best chance of finding a
                match will be if the donor comes from a related genetic pool.
              </p>
              <p>
                If there is no family member match and there is no match
                identified in the existing registries, many patients choose to
                run drives that target their family’s ethnic group and/or the
                historical geographic area where their ancestral line
                originated.
              </p>
              <p>
                People of mixed ethnicity have an especially difficult time
                finding matches. It is estimated that 75 percent of mixed-race
                individuals will not find a match in the current registry
                because their HLA combinations are unique.
              </p>
              <p>
                It is urgent for everyone to get swabbed and join the registry –
                the more people of diverse ethnicity and race join the registry,
                the more chances we have to make lifesaving matches.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
      <br />
      <div>
        <h1>Nutrition And Cancer</h1>
        <p>
          Nutritional support for cancer patients is an important part of
          patient care. Cancer patients are generally confused about nutritional
          matters; for example, what is the best diet, what are good foods and
          bad foods, which supplements are best, and will antioxidants help or
          hurt? There is conflicting information on this topic, but most experts
          agree that to prevent cancer, a plant-based diet rich in vegetables,
          fruit, legumes, whole grains, nuts, quality protein, and healthy fats
          is the best approach. Intake of high-fat foods, particularly from
          animal sources, should be limited. Avoid charred food and limit
          refined sugar. This is an anti-inflammatory diet, and inflammation
          underlies the initiation of cancer, as well as heart disease.
        </p>
        <p>
          For the cancer patient, my recommendations are consistent with
          preventive nutritional guidelines with emphasis on adequate protein,
          low glycemic carbohydrates, and omega-3 fats. Cancer and its treatment
          can increase protein requirements, and if this demand is not satisfied
          dietarily, the body recruits protein from muscle tissue. This may lead
          to cancer cachexia weight loss, a muscle wasting process. Clinical
          nutritionists can monitor this condition and take measures to correct
          it.
        </p>
        <p>
          Some cancer patients lose a lot of weight, but others gain it. Weight
          gain after diagnosis can make the prognosis worse. Try to maintain a
          healthy weight during and after treatment. It has been hypothesized
          that obesity and associated inactivity are major determinants of some
          cancers. Whether it is total fat in the diet or the increased body
          mass that increases risk for cancer is a continuing debate.
        </p>
        <p>
          We do not eat nutrients, we eat food. The benefit of eating a variety
          of fruits and vegetables are that there is a chorus of phytochemicals
          present that work to keep us healthy. Isolated nutrients aren’t as
          helpful and can sometimes do harm.
        </p>
        <p>
          Cancer and cancer treatment can cause nutrition-related issues such as
          an altered sense of taste, loss of appetite, constipation, diarrhea,
          difficulty swallowing, dry mouth, mouth sores, nausea and vomiting,
          weight gain, and weight loss. Nutritionists trained in oncology can
          help minimize these side effects. For example, I recommend that
          patients with mouth sores (mucositis) use a straw to direct fluids
          away from painful areas of the mouth. Patients with nausea feel better
          when they eat foods cold or at room temperature—the aromas of hot
          foods can worsen the nausea.
        </p>
        <p>
          Bone marrow transplant (BMT) patients have unique nutrient
          requirements. Caloric needs are increased early post-transplant to
          account for the metabolic stress induced by the preparative regimen,
          fever, infection, and other metabolic complications. Protein
          requirements are also higher to promote tissue repair after
          cytoreduction and to spare breakdown of lean body mass. Protein needs
          may be further increased with corticosteroid therapy (Prednisone).
        </p>
        <p>
          Patients on immunosuppressive therapy (Cyclosporine and Prednisone)
          should follow safety guidelines for food preparation and storage.
          Certain foods should be restricted during the course of
          immunosuppressive therapy such as unpasteurized milk and milk
          products, aged cheese, raw honey, unwashed raw vegetables and fruit,
          and all miso products. Additionally, the immune suppressed patient
          should not consume grapefruit or grapefruit juice because it interacts
          with transplant rejection drugs.
        </p>
        <p>
          Cancer survivorship should be recognized as a distinct phase of cancer
          care. As a patient moves on after treatment, their medical team
          usually gets narrower despite the increased risk for secondary cancers
          and heart disease. Nutrition professionals can play an active role in
          monitoring blood lipids, weight, body composition, blood sugar, and
          other biomarkers for the extended survivor.
        </p>
        <p>
          Good nutrition is central to a healthy lifestyle that helps to prevent
          diseases including cancer. For the cancer patient, nutrition can 1)
          help prepare the patient pre-treatment, 2) minimize side effects of
          treatment, 3) accelerate the healing process, and 4) help reduce risk
          of recurrence as well as strengthen the patient post-treatment.
        </p>
        <p>By Francine Blinten, M.S., C.C.N.</p>
      </div>
    </Accordion>
  );
};
export default FAQ;
