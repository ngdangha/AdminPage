import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const UserList = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Users" className="text-sm-left" />
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
                    User ID
                  </th>
                  <th scope="col" className="border-0">
                    Username
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
                  <td>HoangPV</td>
                  <td>Phạm Việt Hoàng</td>
                  <td>20</td>
                  <td>Male</td>
                  <td>Hanoi</td>
                  <td>+84 123456789</td>
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

export default UserList;