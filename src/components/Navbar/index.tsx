import { Group, Logout, Home, Notifications, Chat } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import Divider from "@mui/material/Divider";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAuthApi } from "../../utils/request";
import { BACK_URL } from "../../variables";
import NavbarWrapper from "./NavbarWrapper";

import logo from "../../assets/img/logo-nttdata-white.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // UseSates
  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const [open, setOpen] = useState(false);

  // Get user from localstorage
  let jwt = localStorage.getItem("jwt");
  let user = JSON.parse(jwt!).user;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const history = useNavigate();

  // Signout
  const signout = () => {
    if (typeof window.localStorage !== "undefined") {
      let jwt = localStorage.getItem("jwt");
      //  Take accessToken
      let accessToken = JSON.parse(jwt!).accessToken;
      //  Take refreshToken
      let refreshToken = JSON.parse(jwt!).refreshToken;

      axiosAuthApi({
        method: "POST",
        url: "/signout",
        headers: {
          Accept: "application/json",
          authorization: "Bearer " + accessToken,
        },
        data: { refreshToken: refreshToken },
      })
        .then((res) => {
          console.log("singout res", res);
          localStorage.removeItem("jwt");
          history("/signin");
        })
        .catch((err) => {
          console.log("singout err", err.response.data.error);
        });
    }
  };

  // Styles
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledMenu = styled(Menu)(({ theme }) => ({
    top: "7%",
    left: "-3%",
  }));

  const Icons = styled(Box)(({ theme }) => ({}));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <NavbarWrapper>
      <AppBar position="fixed" sx={{ backgroundColor: "#121A38" }}>
        {/* <AppBar position="sticky"> */}
        <StyledToolbar className="navbar">
          <div className="logo-container">
            <img className="logo" src={logo} />
            <div className="logoTitle">Internal Network</div>
          </div>

          {/* navMenu */}
          <div className="navMenu">
            <NavLink to="/" className="navBox">
              <Home className="navIcon" />

              <div className="navText">Home</div>
            </NavLink>

            <NavLink to="/signin" className="navBox">
              <Group className="navIcon" />

              <div className="navText">Friends</div>
            </NavLink>

            <NavLink to="/signin" className="navBox">
              <Notifications className="navIcon" />

              <div className="navText">Notifications</div>
            </NavLink>

            <NavLink to="/signin" className="navBox">
              <Chat className="navIcon" />

              <div className="navText">Chat App</div>
            </NavLink>
          </div>

          {/* Icons */}
          <Icons>
            {/* imageAvatar */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    sx={{
                      width: { xs: "30px", sm: "40px" },
                      height: { xs: "30px", sm: "40px" },
                    }}
                    alt="Profile picture"
                    src={user.profilePicture}
                  />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </Icons>

          {/* Menu */}
          <StyledMenu
            // anchorEl={anchorEl}

            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            keepMounted
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                // mt: 7,
                // ml: -6,

                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{
              horizontal: "right",
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: "right",
              vertical: "top",
            }}
            // anchorReference="anchorPosition"
            // anchorPosition={{ top: 64, left: 1220 }}
          >
            {/* {/* <MenuItem sx={{ color: "#7493CA" }}> */}
            <MenuItem>
              <Avatar
                sx={{
                  width: { xs: "30px", sm: "40px" },
                  height: { xs: "30px", sm: "40px" },
                }}
                alt="Profile picture"
                src={user.profilePicture}
              />
              <Box sx={{ textTransform: "capitalize" }} className="user">
                {user.fname + " " + user.lname}
                <Box sx={{ color: "#7493CA" }}> See you profile</Box>
              </Box>
            </MenuItem>
            <Divider />

            <MenuItem onClick={signout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </StyledMenu>
        </StyledToolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Navbar;
