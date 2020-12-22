import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4 bg-dark">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      {/* <PageTitle sm="4" title="Matched Couples" className="text-sm-left" /> */}
      <h3 class="page-title text-white">Matched Couples</h3>
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            {/* <h6 className="m-0">Users</h6> */}
            <Button size="col-sm-4" theme="white">
                <i className="far fa-bookmark mr-1" />
            </Button>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    User A ID
                  </th>
                  <th scope="col" className="border-0">
                    User A Name
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  <th scope="col" className="border-0">
                    User B Name
                  </th>
                  <th scope="col" className="border-0">
                    User B ID
                  </th>
                  <th scope="col" className="border-0">
                    Updated Date
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
                  <td>Matched</td>
                  <td>Hoang</td>
                  <td>2</td>
                  <td>15/11/2020</td>
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
                  <td>3</td>
                  <td>Thành Long</td>
                  <td>Liked</td>
                  <td>Bim</td>
                  <td>4</td>
                  <td>20/10/2020</td>
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
                  <td>4</td>
                  <td>Thành Long</td>
                  <td>Unmatched</td>
                  <td>Hà</td>
                  <td>5</td>
                  <td>19/10/2020</td>
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

export default Tables;
