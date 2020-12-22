// const Errors = () => (
//   <Container fluid className="main-content-container px-4 pb-4">
//     <div className="error">
//       <div className="error__content">
//         <h2>500</h2>
//         <h3>Something went wrong!</h3>
//         <p>There was a problem on our end. Please try again later.</p>
//         <Button pill>&larr; Go Back</Button>
//       </div>
//     </div>
//   </Container>
// );

/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        }
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/5.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../images/avatars/0.jpg"),
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          body:
            "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title:
            "Totally words widow one downs few age every seven if miss part by fact",
          body:
            "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
          date: "29 February 2019"
        }
      ],

      // Third list of posts.
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Had denoting properly jointure which well books beyond",
          body:
            "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Husbands ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        }
      ],

      // Fourth list of posts.
      PostsListFour: [
        {
          backgroundImage: require("../images/content-management/7.jpeg"),
          author: "Alene Trenton",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Extremity so attending objection as engrossed",
          body:
            "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/8.jpeg"),
          author: "Chris Jamie",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Bed sincerity yet therefore forfeited his",
          body:
            "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/9.jpeg"),
          author: "Monica Jordan",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Object remark lively all did feebly excuse our",
          body:
            "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/10.jpeg"),
          author: "Monica Jordan",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "His followed carriage proposal entrance",
          body:
            "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
          date: "29 February 2019"
        }
      ]
    };
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Second Row of Posts */}
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Third Row of Posts */}
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Fourth Row of posts */}
        <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                />
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.body}</p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    By
                    <a className="text-fiord-blue" href={post.authorUrl}>
                      {post.author}
                    </a>{" "}
                    in
                    <a className="text-fiord-blue" href={post.categoryUrl}>
                      {post.category}
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Posts;

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

// import React from "react";
// import { Container, Row, Col } from "shards-react";

// import PageTitle from "../components/common/PageTitle";
// import Editor from "../components/add-new-post/Editor";
// import SidebarActions from "../components/add-new-post/SidebarActions";
// import SidebarCategories from "../components/add-new-post/SidebarCategories";

// const AddNewPost = () => (
//   <Container fluid className="main-content-container px-4 pb-4">
//     {/* Page Header */}
//     <Row noGutters className="page-header py-4">
//       <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
//     </Row>

//     <Row>
//       {/* Editor */}
//       <Col lg="9" md="12">
//         <Editor />
//       </Col>

//       {/* Sidebar Widgets */}
//       <Col lg="3" md="12">
//         <SidebarActions />
//         <SidebarCategories />
//       </Col>
//     </Row>
//   </Container>
// );

// export default AddNewPost;

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