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
import React,{Fragment} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Edit from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/NotInterested";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  InputBase,
  Typography,
  Fab
} from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card style={{flex:1}}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Services</h4>
            <p className={classes.cardCategoryWhite}>
              You can edit or disable any service
            </p>
			<Fab
			  aria-label="Add"
			  title="Add"
			  style={{ position:"absolute",height: 50, width: 50,right:25,top:18 }}
			  mini
			>
			  <AddIcon/>
			</Fab>
          </CardHeader>
		<GridItem xs={12} sm={12} md={6}>
          <CardBody style={{marginTop:15,height:400,overflowY: "auto"}}>
			<Fragment>
				<Typography variant="h4" style={{ textTransform: "capitalize" }}>
					Service 1
				</Typography>
				<List component="ul">
					<ListItem button>
						<ListItemText primary="Sub Service 1" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
				<Typography variant="h4" style={{ textTransform: "capitalize" }}>
					Service 2
				</Typography>
				<List component="ul">
					<ListItem button>
						<ListItemText primary="Sub Service 1" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem button>
						<ListItemText primary="Sub Service 2" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
				<Typography variant="h4" style={{ textTransform: "capitalize" }}>
					Service 3
				</Typography>
				<List component="ul">
					<ListItem button>
						<ListItemText primary="Sub Service 1" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem button>
						<ListItemText primary="Sub Service 2" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem button>
						<ListItemText primary="Sub Service 3" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
					<ListItem button>
						<ListItemText primary="Sub Service 4" />
						<ListItemSecondaryAction>
						  <IconButton title="Edit">
							<Edit />
						  </IconButton>
						  <IconButton title="Disable">
							<DeleteIcon />
						  </IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
			</Fragment>
          </CardBody>
		</GridItem>
        </Card>
		<GridItem xs={12} sm={12} md={6}> 
		<CardBody>
		<Typography variant="h4" style={{ textTransform: "capitalize" }}>
					Click any service to see details
				</Typography>
		</CardBody>
		</GridItem>
      </GridItem>
    </GridContainer>
  );
}

TableList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TableList);
