/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";


function History(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
		<Card>
			<CardHeader color="primary">
				<h4 className={classes.cardTitleWhite}>History</h4>
			</CardHeader>
			<CardBody>
				<Table
					tableHeaderColor="primary"
					tableHead={["ID", "Client Name", "Address", "Payment","Service-Type","Worker","Request-Date","Complete-Date"]}
					tableData={[
						["1", "Dakota Rice","Ahmedabad","INR 450","Plumbing","Jaivir","25-12-2019","04-01-2019"],
						["2", "Vishal","Surat","INR 200","Electrician","Baleram","25-1-2019","30-01-2019"],
						["3", "Mohit","Ahmedabad","INR 1000","Pest Control","Jainum","2-2-2019","04-02-2019"],
						["4", "Akshay","Rajkot","INR 800","Paint","Deepanshu","01-04-2019","04-04-2019"],
					  ]}
				/>
			</CardBody>
		</Card>
      </GridItem>
    </GridContainer>
  );
}

History.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(History);
