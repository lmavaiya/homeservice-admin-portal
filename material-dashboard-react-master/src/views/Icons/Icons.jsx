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
import React ,{useState} from "react";
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
import Switch from "react-switch";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";


function Icons(props) {
  const { classes } = props;
  const [value, setValue] = useState(false);
  const handleChange=(value)=>{
	  const newVlaue = !value
  setValue({newVlaue} );
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
		<CustomTabs
              title="Workers:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "List",
                  tabContent: (
                    <Table
					  tableHeaderColor="primary"
					  tableHead={["EmailID", "Name", "Phone", "Gender","Address","WorkeType"]}
					  tableData={[
						["workera@gmail.com", "Baleram", "7874353439", "Male","GandhiNagar","Electrician"]
					  ]}
					/>
                  )
                },
                {
                  tabName: "New",
                  tabContent: (
                    <Table
                  tableHeaderColor="primary"
                  tableHead={["EmailID", "Name", "Phone", "Gender","Address","WorkeType","status"]}
					  tableData={[
						["workerb@gmail.com", "Mahesh", "9856321470", "Male","GandhiNagar","Plumber",<Switch onChange={handleChange} checked={value}/>]
					  ]}
                />
                  )
                }
              ]}
            />
      </GridItem>
    </GridContainer>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
