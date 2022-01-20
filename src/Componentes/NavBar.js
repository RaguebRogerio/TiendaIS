import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { rootPath } from "../App";
//Productos
import CheckroomIcon from '@mui/icons-material/Checkroom';
//agregar caracteristica
import AddBoxIcon from '@mui/icons-material/AddBox';
//Inventario
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
// Realizar Venta
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//Salir
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const abrirMenu = () => {
    setOpen(true);
  };

  const cerrarMenu = () => {
    setOpen(false);
  };
  let history =useHistory()
  const rutas = [
      {
          name:"Productos",
          direccion: rootPath + "/producto",

      },
      {
        name:"Stock",
        direccion: rootPath + "/agregarstock",

    },
    {
        name:"Agregar caracteristica",
        direccion: rootPath + "/agregarcaracteristica",

    },
    {
        name:"Realizar Venta",
        direccion: rootPath + "/venta",

    },
    {
      name:"Salir",
      direccion: "/",

  },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={abrirMenu}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h5" noWrap component="div">
            Menú
          </Typography>
          <IconButton onClick={cerrarMenu}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
              
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {rutas.map((route, index) => (
          
                <ListItem button key={index} >
                <ListItemIcon>
                    {route.name === "Productos" ? <CheckroomIcon color="primary"/> : route.name === "Stock" ? <Inventory2SharpIcon color="primary"/> :
                    route.name === "Agregar caracteristica" ? <AddBoxIcon color="primary"/>: route.name === "Realizar Venta" ? <AddShoppingCartIcon color="primary"/>
                    : <LogoutIcon color="primary"/>}
                </ListItemIcon>
                <ListItemText primary={route.name} onClick={()=>history.push(route.direccion)}/>
                </ListItem>
            
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
