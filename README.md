# DiveVR
## San Jose State University 
  - Fall 2019
  - CMPE Department
  - Senior Project 
  #### Team Members
   - Abraham Tesfay   
      - BS.Software Engineer
   - Cheng Chin Lim
      - BS.Software Engineer
   - Dominic Pham
      - BS.Software Engineer

### Project Goals and Objectives 

The main goal of our project is to develop Dive VR platform - a web browser-based, cross platform VR space on the web and make it available mainstream. 
The project has two main components, the first one is a full functional web app platform to manage all the contents of the VR.  
This part of the product will have a full dashboard functionality where users can sign-up for new Dive VR account, upload VR contents and manage their account accordingly. This Dive VR dashboard should also provide some statistical data to the user based on VR category views and demography.  
The second component of our product is to design Oculus app that runs on the Oculus standalone VR headset. The goal is to inject the web app we developed in the first component of the project.  The whole purpose is to run the VR contents on browser inside the Oculus app that way a user can have impressive experience. We also hope to implement compatibility with different types of VR headsets.
 
At the end of our project we are hoping to provide a dynamic Virtual Reality platform packed with variety of VR content and experience. 
Since VR/AR industry is bound to grow exponentially for the next five years, we also hope to tap into this billion-dollar industry and be early adopters. 

  ### DiveVR Web Home Page
![Product Gif](./src/assets/github/material-dashboard-pro-react.gif)



## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions



## Demo

- [Start page](https://demos.creative-tim.com/material-dashboard-pro-react/#/dashboard)
- [User profile page](https://demos.creative-tim.com/material-dashboard-pro-react/#/user-page)
- [Tables page ](https://demos.creative-tim.com/material-dashboard-pro-react/#/tables/extended-tables)
- [Maps Page](https://demos.creative-tim.com/material-dashboard-pro-react/#/maps/google-maps)
- [Notifications page](https://demos.creative-tim.com/material-dashboard-pro-react/#/components/notifications)

[View More](https://demos.creative-tim.com/material-dashboard-pro-react/#/dashboard).


## Quick start

Quick start options:

## How to set up and run project locally? 

### Setting Up Project on Mac

1. Open a terminal and cd into the root directory (`DiveVR`, not `react`)
2. Run `npm install`

The following environment variables need to be set in the backend (`root` directory):
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AWS_REGION
* S3_BUCKET_NAME
* DYNAMO_TABLE_NAME

3. Run `npm start` in the root directory to start up the backend
4. Cd into the `react` folder, then run `npm install`

The following environment variables need to be set in the frontend (`react` directory)
* REACT_APP_FIREBASE_API_KEY
* REACT_APP_FIREBASE_AUTH_DOMAIN
* REACT_APP_FIREBASE_DATABASE_URL
* REACT_APP_FIREBASE_PROJECT_ID
* REACT_APP_FIREBASE_STORAGE_BUCKET
* REACT_APP_FIREBASE_MESSAGING_SENDER_ID
* REACT_APP_FIREBASE_APP_ID
* REACT_APP_EXPRESS_BACKEND

5. Run `npm start` in the `react` folder. The localhost page should open up in the browser.



## Documentation
The documentation for the DiveVR can be obtianed by contacting the devleopers 

## File Structure

Within the download you'll find the following directories and files:

```
divevr.react
│
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── package.json
├── documentation
│   ├── assets
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── routes.js
    ├── assets
    │   ├── github
    │   ├── img
    │   │   ├── faces
    │   │   ├── flags
    │   ├── jss
    │   │   ├── material-dashboard-pro-react
    │   │   │   ├── components
    │   │   │   ├── layouts
    │   │   │   └── views
    │   │   └── material-dashboard-pro-react.jsx
    │   └── scss
    │       ├── material-dashboard-pro-react
    │       │   ├── mixins
    │       │   └── plugins
    │       └── material-dashboard-pro-react.scss
    ├── components
    │   ├── Accordion
    │   │   └── Accordion.jsx
    │   ├── Badge
    │   │   └── Badge.jsx
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── CardAvatar.jsx
    │   │   ├── CardBody.jsx
    │   │   ├── CardFooter.jsx
    │   │   ├── CardHeader.jsx
    │   │   ├── CardIcon.jsx
    │   │   └── CardText.jsx
    │   ├── Clearfix
    │   │   └── Clearfix.jsx
    │   ├── CustomButtons
    │   │   └── Button.jsx
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.jsx
    │   ├── CustomTabs
    │   │   └── CustomTabs.jsx
    │   ├── CustomUpload
    │   │   ├── ImageUpload.jsx
    │   │   └── PictureUpload.jsx
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   ├── GridContainer.jsx
    │   │   └── GridItem.jsx
    │   ├── Heading
    │   │   └── Heading.jsx
    │   ├── InfoArea
    │   │   └── InfoArea.jsx
    │   ├── Instruction
    │   │   └── Instruction.jsx
    │   ├── NavPills
    │   │   └── NavPills.jsx
    │   ├── Navbars
    │   │   ├── AdminNavbar.jsx
    │   │   ├── AdminNavbarLinks.jsx
    │   │   └── AuthNavbar.jsx
    │   ├── Pagination
    │   │   └── Pagination.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── Snackbar
    │   │   ├── Snackbar.jsx
    │   │   └── SnackbarContent.jsx
    │   ├── Table
    │   │   └── Table.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   ├── Timeline
    │   │   └── Timeline.jsx
    │   ├── Typography
    │   │   ├── Danger.jsx
    │   │   ├── Info.jsx
    │   │   ├── Muted.jsx
    │   │   ├── Primary.jsx
    │   │   ├── Quote.jsx
    │   │   ├── Success.jsx
    │   │   └── Warning.jsx
    │   └── Wizard
    │       └── Wizard.jsx
    ├── layouts
    │   ├── Admin.jsx
    │   ├── Auth.jsx
    │   └── RTL.jsx
    ├── variables
    │   ├── charts.jsx
    │   └── general.jsx
    └── views
        ├── Calendar
        │   └── Calendar.jsx
        ├── Charts
        │   └── Charts.jsx
        ├── Components
        │   ├── Buttons.jsx
        │   ├── GridSystem.jsx
        │   ├── Icons.jsx
        │   ├── Notifications.jsx
        │   ├── Panels.jsx
        │   ├── SweetAlert.jsx
        │   └── Typography.jsx
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Forms
        │   ├── ExtendedForms.jsx
        │   ├── RegularForms.jsx
        │   ├── ValidationForms.jsx
        │   ├── Wizard.jsx
        │   └── WizardSteps
        │       ├── Step1.jsx
        │       ├── Step2.jsx
        │       └── Step3.jsx
        ├── Maps
        │   ├── FullScreenMap.jsx
        │   ├── GoogleMaps.jsx
        │   └── VectorMap.jsx
        ├── Pages
        │   ├── ErrorPage.jsx
        │   ├── LockScreenPage.jsx
        │   ├── LoginPage.jsx
        │   ├── PricingPage.jsx
        │   ├── RTLSupport.jsx
        │   ├── RegisterPage.jsx
        │   ├── Timeline.jsx
        │   └── UserProfile.jsx
        ├── Tables
        │   ├── ExtendedTables.jsx
        │   ├── ReactTables.jsx
        │   └── RegularTables.jsx
        └── Widgets
            └── Widgets.jsx
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- [Live Preview](Comming Soon)
- Documentation is [Only availbe from developers)
- License Agreement: 
- Support: 
- Issues: [Github Issues Page]()
- DiveVR Web  - [demo](Comming Soon)
- For Front End Development - [Material UI React ](https://material-ui.com/)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the Material Dashboard Pro. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Dashboard Pro. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2019 DiveVR (https://www.diveintovr.com)
- DiveVR [license](https://www.diveintovr.com/license)

## Useful Links

##### Social Media

Twitter: <https://twitter.com/DiveVR>

Facebook: <https://www.facebook.com/DiveVR>

Instagram: <https://instagram.com/DiveVRofficial>

#### Special thanks
During the development of our project, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:
+ [Perfect-scrollbar](https://github.com/utatti/perfect-scrollbar) for the slim and beautiful scrollbars.
+ [React-chartist](https://github.com/fraserxu/react-chartist) for the wonderful charts.
+ [React-datetime](https://github.com/YouCanBookMe/react-datetime) for the easy to use date and time pickers.
+ [React-big-calendar](https://github.com/intljusticemission/react-big-calendar) for the a wonderful calendar.
+ [React-bootstrap-sweetalert](https://github.com/djorg83/react-bootstrap-sweetalert) for the wonderful alerts.
+ [React-google-maps](https://github.com/tomchentw/react-google-maps) for the nice and easy to use map components.
+ [React-jvectormap](https://github.com/kadoshms/react-jvectormap) for the nice vector map components.
+ [React-nouislider](https://github.com/algolia/react-nouislider) for the nice and clean slider.
+ [React-tables](https://react-table.js.org/#/story/simple-table) for the nice and clean slider.
+ [React-tagsinput](https://github.com/olahol/react-tagsinput) for the easy and beatiful to use tags components.
