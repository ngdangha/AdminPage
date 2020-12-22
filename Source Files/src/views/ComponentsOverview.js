// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   ListGroup,
//   ListGroupItem,
//   Form,
//   Alert
// } from "shards-react";

// import PageTitle from "../components/common/PageTitle";
// import Colors from "../components/components-overview/Colors";
// import Checkboxes from "../components/components-overview/Checkboxes";
// import RadioButtons from "../components/components-overview/RadioButtons";
// import ToggleButtons from "../components/components-overview/ToggleButtons";
// import SmallButtons from "../components/components-overview/SmallButtons";
// import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
// import NormalButtons from "../components/components-overview/NormalButtons";
// import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
// import Forms from "../components/components-overview/Forms";
// import FormValidation from "../components/components-overview/FormValidation";
// import CompleteFormExample from "../components/components-overview/CompleteFormExample";
// import Sliders from "../components/components-overview/Sliders";
// import ProgressBars from "../components/components-overview/ProgressBars";
// import ButtonGroups from "../components/components-overview/ButtonGroups";
// import InputGroups from "../components/components-overview/InputGroups";
// import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
// import CustomFileUpload from "../components/components-overview/CustomFileUpload";
// import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
// import CustomSelect from "../components/components-overview/CustomSelect";

// const ComponentsOverview = () => (
//   <div>
//     <Container fluid className="px-0">
//       <Alert className="mb-0">
//         <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
//       </Alert>
//     </Container>
//     <Container fluid className="main-content-container px-4">
//       <Row noGutters className="page-header py-4">
//         <PageTitle
//           sm="4"
//           title="Forms & Components"
//           subtitle="Overview"
//           className="text-sm-left"
//         />
//       </Row>

//       <Colors />

//       <Row>
//         <Col lg="8" className="mb-4">
//           <Card small className="mb-4">
//             <CardHeader className="border-bottom">
//               <h6 className="m-0">Form Inputs</h6>
//             </CardHeader>

//             <ListGroup flush>
//               <ListGroupItem className="p-0 px-3 pt-3">
//                 <Row>
//                   <Checkboxes />
//                   <RadioButtons />
//                   <ToggleButtons />
//                 </Row>
//               </ListGroupItem>

//               <ListGroupItem className="p-3">
//                 <strong className="text-muted d-block my-2">
//                   Small Buttons
//                 </strong>
//                 <SmallButtons />

//                 <strong className="text-muted d-block my-2">
//                   Small Outline Button
//                 </strong>
//                 <SmallOutlineButtons />
//               </ListGroupItem>

//               <ListGroupItem className="p-3">
//                 {/* Normal Buttons */}
//                 <strong className="text-muted d-block my-2">
//                   Normal Buttons
//                 </strong>
//                 <NormalButtons />

//                 {/* Normal Outline Buttons */}
//                 <strong className="text-muted d-block my-2">
//                   Normal Outline Buttons
//                 </strong>
//                 <NormalOutlineButtons />
//               </ListGroupItem>

//               {/* Forms & Form Validation */}
//               <ListGroupItem className="p-3">
//                 <Row>
//                   <Forms />
//                   <FormValidation />
//                 </Row>
//               </ListGroupItem>
//             </ListGroup>
//           </Card>

//           {/* Complete Form Example */}
//           <Card small>
//             <CardHeader className="border-bottom">
//               <h6 className="m-0">Form Example</h6>
//             </CardHeader>
//             <CompleteFormExample />
//           </Card>
//         </Col>

//         <Col lg="4" className="mb-4">
//           {/* Sliders & Progress Bars */}
//           <Card small className="mb-4">
//             <CardHeader className="border-bottom">
//               <h6 className="m-0">Sliders & Progress Bars</h6>
//             </CardHeader>
//             <ListGroup flush>
//               <ProgressBars />
//               <Sliders />
//             </ListGroup>
//           </Card>

//           {/* Groups */}
//           <Card small className="mb-4">
//             <CardHeader className="border-bottom">
//               <h6 className="m-0">Groups</h6>
//             </CardHeader>

//             <ListGroup flush>
//               <ListGroupItem className="px-3">
//                 <Form>
//                   <strong className="text-muted d-block mb-3">
//                     Button Groups
//                   </strong>
//                   <ButtonGroups />

//                   <strong className="text-muted d-block mb-2">
//                     Input Groups
//                   </strong>
//                   <InputGroups />

//                   <strong className="text-muted d-block mb-2">
//                     Seamless Input Groups
//                   </strong>
//                   <SeamlessInputGroups />
//                 </Form>
//               </ListGroupItem>
//             </ListGroup>
//           </Card>

//           <Card small>
//             {/* Files & Dropdowns */}
//             <CardHeader className="border-bottom">
//               <h6 className="m-0">Files & Dropdowns</h6>
//             </CardHeader>

//             <ListGroup flush>
//               <ListGroupItem className="px-3">
//                 <strong className="text-muted d-block mb-2">
//                   Custom File Upload
//                 </strong>
//                 <CustomFileUpload />

//                 <strong className="text-muted d-block mb-2">
//                   Dropdown Input Groups
//                 </strong>
//                 <DropdownInputGroups />

//                 <strong className="text-muted d-block mb-2">
//                   Custom Select
//                 </strong>
//                 <CustomSelect />
//               </ListGroupItem>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

// export default ComponentsOverview;

import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const ReportTable = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Reports" className="text-sm-left" />
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            {/* <h6 className="m-0">Users</h6> */}
            <Button size="sm" theme="white">
              <i className="far fa-bookmark mr-1" />
            </Button>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="bg-dark">
                <tr>
                  <th scope="col" className="border-0">
                    Reporter ID
                  </th>
                  <th scope="col" className="border-0">
                    Reporter Name
                  </th>
                  <th scope="col" className="border-0">
                    Reported User Name
                  </th>
                  <th scope="col" className="border-0">
                    Reported User ID
                  </th>
                  <th scope="col" className="border-0">
                    Report Content
                  </th>
                  <th scope="col" className="border-0">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Robin</td>
                  <td>Hoang</td>
                  <td>2</td>
                  <td>Sử dụng ngôn từ phản cảm</td>
                  <td>
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" />
                    </Button>
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hoang</td>
                  <td>Robin</td>
                  <td>1</td>
                  <td>Báo cáo với lí do không chính đáng</td>
                  <td>
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" />
                    </Button>
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ReportTable;
