import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlagIcon from "@material-ui/icons/Flag";
import { useIntl } from "react-intl";
import { navbarMessage, myAccountMessage } from "../translations";
import { useSelector, useDispatch } from "react-redux";
import SearchText from "./searchComponent";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBarComponent = () => {
  const intl = useIntl();
  const classes = useStyles();
  const store = useSelector((state) => state);
  console.log("store", store);
  const dispatch = useDispatch();
  const [showLocale, setShowLocale] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLocaleMenuOpen = Boolean(showLocale);

  const handleLocaleMenu = (event, locale) => {
    if (locale) {
      dispatch({ type: "setLang", value: locale });
    }
    setAnchorEl(null);
    setShowLocale(showLocale ? null : event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    if (!store.user?.name) {
      dispatch({ type: "LOGIN" });
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const localeMenu = (
    <Menu
      anchorEl={showLocale}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={"primary-locale-menu"}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isLocaleMenuOpen}
      onClose={() => handleLocaleMenu()}
    >
      {Object.keys(store.lang.languageSupport).map((key) => (
        <MenuItem
          selected={store.lang.locale === key}
          onClick={(e) => handleLocaleMenu(e, key)}
        >
          {store.lang.languageSupport[key]}
        </MenuItem>
      ))}
    </Menu>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {intl.formatMessage(myAccountMessage.myAccount)}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {intl.formatMessage(myAccountMessage.myProfile)}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {intl.formatMessage(myAccountMessage.myOrder)}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {intl.formatMessage(myAccountMessage.myWishlist)}
      </MenuItem>
      <MenuItem onClick={logout}>
        {intl.formatMessage(myAccountMessage.logout)}
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>
          {intl.formatMessage(
            store.user?.name
              ? myAccountMessage.welcome
              : myAccountMessage.login,
            { username: store.user?.name }
          )}
        </p>
      </MenuItem>
      <MenuItem href="/wishlist">
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FavoriteBorderIcon />
        </IconButton>
        <p>{intl.formatMessage(myAccountMessage.myWishlist)}</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>{intl.formatMessage(myAccountMessage.myCart)}</p>
      </MenuItem>
      <MenuItem onClick={handleLocaleMenu}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <FlagIcon />
        </IconButton>
        <p>{intl.formatMessage(navbarMessage.navLang)}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: "#333" }} position="static">
        <Toolbar>
          <a href="/">
            <Typography className={classes.title} variant="h4" noWrap href="/">
              VuyIt
            </Typography>
          </a>
          <div className={classes.grow} />
          <SearchText
            placeholder={intl.formatMessage(navbarMessage.navBarSearch)}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Typography>
                {intl.formatMessage(
                  store.user?.name
                    ? myAccountMessage.welcome
                    : myAccountMessage.login,
                  { username: store.user?.name }
                )}
              </Typography>
              <AccountCircle />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              href={"/wishlist"}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleLocaleMenu}
            >
              <FlagIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {localeMenu}
    </div>
  );
};

export default NavBarComponent;
