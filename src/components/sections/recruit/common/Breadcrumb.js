import React from "react";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{
        margin: `2px auto`,
      }}
    >
      <Link
        to="/recruit"
        style={{
          textDecoration: `none`,
        }}
      >
        <StyledBreadcrumb
          href="/recruit"
          label={t("recruit-entry__breadcrum")}
          icon={<HomeIcon fontSize="small" />}
        />
      </Link>
      <StyledBreadcrumb label={t(data.title)} />
    </Breadcrumbs>
  );
}
