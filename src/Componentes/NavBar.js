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
import PeopleIcon from '@mui/icons-material/People';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { apiPath, rootPath } from "../App";
import StorefrontIcon from '@mui/icons-material/Storefront';
import axios from "axios";
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
  const cerrarSesion  = ()=>{
    const data = {
      "legajo":Number(window.localStorage.getItem("legajo"))
    }
    axios.post(apiPath + "/Users/CerrarSesion", data)
    .then(response=>{
      if(response.data.success){
        window.localStorage.clear()
        history.push("/")
      }else{
        console.log("error al salir. Pone un modal ura")
      }
    })
  }
  const rutas = [
      {
        name:"Clientes",
          click: ()=>history.push( rootPath + "/Clientes")
      },
      {
          name:"Agregar caracteristica",
          click: ()=>history.push( rootPath + "/agregarcaracteristica")
      },
      {
          name:"Productos",
          click: ()=> history.push( rootPath + "/producto")

      },
      {
        name:"Realizar Venta",
        click: ()=> history.push( rootPath + "/venta")

      },
      {
        name:"Stock",
        click: ()=> history.push( rootPath + "/agregarstock")


    },
    {
      name:"Salir",
      click: ()=> cerrarSesion()
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={{ mr: 2 }}
          >
            <StorefrontIcon  fontSize="large"/>
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
           Men??
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
                    {route.name === "Clientes" ? <PeopleIcon color="primary"/> : route.name === "Productos" ? <CheckroomIcon color="primary"/> : route.name === "Stock" ? <Inventory2SharpIcon color="primary"/> :
                    route.name === "Agregar caracteristica" ? <AddBoxIcon color="primary"/>: route.name === "Realizar Venta" ? <AddShoppingCartIcon color="primary"/>
                    : <LogoutIcon color="primary"/>}
                </ListItemIcon>
                <ListItemText primary={route.name} onClick={route.click}/>
                </ListItem>
            
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
