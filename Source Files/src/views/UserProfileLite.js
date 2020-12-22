import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
// import UserDetails from "../components/user-profile-lite/UserDetails";
// import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

// const UserProfileLite = () => (
//   <Container fluid className="main-content-container px-4">
//     <Row noGutters className="page-header py-4">
//       <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
//     </Row>
//     <Row>
//       <Col lg="4">
//         <UserDetails />
//       </Col>
//       <Col lg="8">
//         <UserAccountDetails />
//       </Col>
//     </Row>
//   </Container>
// );

const AdminList = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Admin List" className="text-sm-left" />
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <div>
              {/* <h6 className="col-m-4 text-white">Active Admins</h6> */}
              <Button size="col-sm-4" theme="white">
                <i className="far fa-bookmark mr-1" />
              </Button>
            </div>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    Admin ID
                  </th>
                  <th scope="col" className="border-0">
                    Admin Name
                  </th>
                  <th scope="col" className="border-0">
                    Full Name
                  </th>
                  <th scope="col" className="border-0">
                    Age
                  </th>
                  <th scope="col" className="border-0">
                    Sex
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Phone
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
                  <td>Nguyễn Huy Sơn</td>
                  <td>20</td>
                  <td>Male</td>
                  <td>Hanoi</td>
                  <td>+84 123456789</td>
                  <td>
                    <div className="my-auto ml-auto">
                      <Button size="sm" theme="white">
                        <i className="far fa-bookmark mr-1" />
                      </Button>
                      <Button size="sm" theme="white">
                        <i className="far fa-bookmark mr-1" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>HoangPV</td>
                  <td>Phạm Việt Hoàng</td>
                  <td>20</td>
                  <td>Male</td>
                  <td>Hanoi</td>
                  <td>+84 123456789</td>
                  <td>
                    <div className="my-auto ml-auto">
                      <Button size="sm" theme="white">
                        <i className="far fa-bookmark mr-1" />
                      </Button>
                      <Button size="sm" theme="white">
                        <i className="far fa-bookmark mr-1" />
                      </Button>
                    </div>
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

export default AdminList;
