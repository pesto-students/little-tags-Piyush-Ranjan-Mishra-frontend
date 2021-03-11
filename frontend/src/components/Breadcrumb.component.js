import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { emphasize, withStyles, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import { useIntl } from "react-intl";
import { navbarMessage } from "../translations";

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
const useStyles = makeStyles((theme) => ({
  breadCrumbs: {
    height: "40px",
    padding: "20px 20px",
  },
}));

const BreadCrumbs = ({ urlList }) => {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <div className={classes.breadCrumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        {Object.keys(urlList).map((url, index, arr) => {
          if (index === 0) {
            return (
              <StyledBreadcrumb
                key={url}
                component="a"
                href={url}
                label={intl.formatMessage(navbarMessage.home)}
                icon={<HomeIcon fontSize="small" />}
              />
            );
          }
          return (
            <StyledBreadcrumb
              key={url}
              component="a"
              variant={index === arr.length - 1 ? "outlined" : "default"}
              label={`${urlList[url]}`}
              url={url}
            />
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
