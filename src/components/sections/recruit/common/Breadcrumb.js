import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import {Link} from 'react-router-dom';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);


export default function Breadcrumb({ data }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to= "/recruit"  style={{
        textDecoration: `none`
      }}>
        <StyledBreadcrumb
          href="/recruit"
          label="採用情報"
          icon={<HomeIcon fontSize="small" />}
        />
      </Link>
      <StyledBreadcrumb
        label={data.title}
      />
    </Breadcrumbs>
  );
}
