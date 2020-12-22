import React from "react";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardHeader, 
  CardBody, 
  Button 
} from "shards-react";

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